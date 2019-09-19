<template>
  <div class="user">
    <div class="optionDiv">
      <el-input v-model="search" style="width:300px" placeholder="请输入内容" size="mini"></el-input>
      <el-button type="danger" size="mini" @click="batchDeleteUser">批量删除</el-button>
      <el-button type="success" size="mini" @click="addUser">新增</el-button>
      <el-button type="primary" style="float:none" size="mini" @click="toSearch">搜索</el-button>
    </div>
    <div class="tableDiv">
      <el-table height="600px"
        ref="multipleTable"
        :data="userList"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="用户名" prop="username" align="center">
        </el-table-column>
        <el-table-column
          label="真实姓名" prop="nickname" align="center">
        </el-table-column>
        <el-table-column
          label="邮箱" prop="email" align="center">
        </el-table-column>
        <el-table-column
          prop="userface"
          label="头像" align="center">
          <template slot-scope="scope">
          	<el-popover
						  placement="right"
						  trigger="hover">
							<img :src="scope.row.userface" alt="" width="200">
						  <img slot="reference" :src="scope.row.userface" alt="" width="50">
						</el-popover>
          </template>
        </el-table-column>
        <el-table-column
          label="状态" prop="enabled" align="center">
          <template slot-scope="scope">
          	<el-switch
              v-model="scope.row.enabled"
              active-color="#13ce66"
              inactive-color="#ccc" @change="enabledChange(scope.row)">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope" style="width:300px">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="warning"
              @click="uploadImg(scope.$index, scope.row)">上传头像</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" :label-width="formLabelWidth">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-radio v-model="form.enabled" label="true">启用</el-radio>
          <el-radio v-model="form.enabled" label="false">禁用</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveUser">保 存</el-button>
      </div>
    </el-dialog>
    <el-dialog title="上传头像" :visible.sync="dialogImgVisible">
      <el-upload
        class="avatar-uploader"
        action="http://134.175.154.93:8099/manager/file/upload"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  data () {
    return {
      search:'',
      userList:[],
      multipleSelection:[],
      dialogTitle:'新增',
      dialogFormVisible:false,
      dialogImgVisible:false,
      formLabelWidth:'80px',
      imageUrl: '',
      currentUser:'',
      form:{
        enabled:'false'
      }
    }
  },
  methods:{
    ...mapActions(['findAllUser','changeStatus','saveOrUpdateUser','deleteUserById']),
    addUser(){
      this.dialogFormVisible = true;
      this.form = {
        enabled:'false',
      };
    },
    saveUser(){
      this.saveOrUpdateUser(this.form).then((data)=>{
        if (data.status == 200) {
          this.dialogFormVisible = false;
          this.$message({
            message: '保存成功',
            type: 'success'
          });
          this.findAllUser().then((data)=>{
            this.userList = data;
          }).catch();
        }else{
          this.dialogFormVisible = false;
          this.$message({
            message: '保存失败',
            type: 'error'
          });
        }
      }).catch((error)=>{
        this.dialogFormVisible = false;
        this.$message({
          message: '保存失败',
          type: 'error'
        });
      });
    },
    uploadImg(index,row){
      this.currentUser = row;
      this.dialogImgVisible = true;
      this.imageUrl = '';
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      let url ='http://39.108.81.60:8888/'+res.data.groupname+'/'+res.data.id;
      console.log(url);
      this.form = {
        username:this.currentUser.username,
  			password:this.currentUser.password,
  			nickname:this.currentUser.nickname,
  			email:this.currentUser.email,
  			enabled:this.currentUser.enabled+'',
  			id:this.currentUser.id,
  			userface:url,
      };
      this.saveUser();
      this.dialogImgVisible = false;
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isLt2M;
    },
    batchDeleteUser(){

    },
    toSearch(){
      let that = this;
      this.userList = this.users.filter(function(item){
        if (item.username) {
          return item.username.indexOf(that.search) != -1;
        }else{
          return true;
        }
      });
    },
    enabledChange(row){
      this.changeStatus({id:row.id,status:row.enabled}).then((data)=>{
        if (data.status == 200) {
          this.findAllUser().then((data)=>{
            this.userList = data;
          }).catch();
          this.$message({
            message: '状态修改成功',
            type: 'success'
          });
        }else{
          this.$message({
            message: '状态修改失败',
            type: 'error'
          });
        }
      }).catch((error)=>{
        this.$message({
          message: '状态修改失败',
          type: 'error'
        });
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index,row){
      this.form = {
        username:row.username,
  			password:row.password,
  			nickname:row.nickname,
        email:row.email,
        enabled:row.enabled+'',
        id:row.id,
        userface:row.userface,
      };
      this.dialogFormVisible = true;
    },
    handleDelete(index,row){
      this.deleteUserById({id:row.id}).then((data)=>{
        if (data.status == 200) {
          this.findAllUser().then((data)=>{
            this.userList = data;
          }).catch();
          this.$message({
            message: '删除成功',
            type: 'success'
          });
        }else{
          this.$message({
            message: '删除失败',
            type: 'error'
          });
        }
      }).catch((error)=>{
        this.$message({
          message: '删除失败',
          type: 'error'
        });
      });
    },
  },
  computed:{
    ...mapGetters(['users']),
  },
  created(){
    this.findAllUser().then((data)=>{
      this.userList = data;
    }).catch();
  }
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<style lang="scss">
  .user{
    .optionDiv{
      button{
        float: right;
        margin-left: 10px;
      }
    }
  }
</style>