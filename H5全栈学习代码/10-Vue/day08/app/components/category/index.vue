<template>
  <div class="category">
    <div class="optionDiv">
      <el-input v-model="search" placeholder="请输入内容" size="mini"></el-input>
      <el-button type="success" size="mini" @click="addCategory">新增</el-button>
      <el-button type="danger" size="mini" @click="batchDeleteCategory">批量删除</el-button>
      <el-button type="primary" size="mini" @click="toSearch">搜索</el-button>
    </div>
    <div class="tableDiv">
      <el-table height="600px"
        ref="multipleTable"
        :data="categoryList"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="栏目名称" prop="name">
        </el-table-column>
        <el-table-column
          prop="comment"
          label="描述">
        </el-table-column>
        <el-table-column
          prop="parent.name"
          label="父栏目">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
        <el-form-item label="栏目名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="父栏目" :label-width="formLabelWidth">
          <el-select v-model="form.parentId" placeholder="请选择父栏目">
            <el-option v-for="(item,index) in categories" :key="index" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.comment" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveCategory">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  data () {
    return {
      search:'',
      multipleSelection:[],
      categoryList:[],
      dialogTitle:'新增',
      dialogFormVisible:false,
      formLabelWidth:'80px',
      form:{
        no:0
      }

    }
  },
  computed:{
    ...mapGetters(['msg','categories']),
  },
  methods:{
    ...mapActions(['findAllCategory','saveOrUpdateCategory','deleteCategoryById','batchesDeleteCategory']),
    toSearch(){
      let that = this;
      this.categoryList = this.categories.filter(function(item){
        if (item.name) {
          return item.name.indexOf(that.search) != -1;
        }else{
          return true;
        }
      });
    },
    addCategory(){
      this.form = {
        no:0
      };
      this.dialogFormVisible = true;
    },
    batchDeleteCategory(){
      let ids = this.multipleSelection.map((item)=>{
        return item.id;
      });
      this.batchesDeleteCategory({ids:ids.join(',')}).then((data)=>{
        if (data.status == 200) {
          this.findAllCategory().then((data)=>{
            this.categoryList = data;
          }).catch();
          this.$message({
            message: '批量删除成功',
            type: 'success'
          });
        }else{
          this.$message({
            message: '批量删除失败',
            type: 'error'
          });
        }
      }).catch((error)=>{
        this.$message({
          message: '批量删除失败',
          type: 'error'
        });
      });
    },
    saveCategory(){
      this.saveOrUpdateCategory(this.form).then((data)=>{
        if (data.status == 200) {
          this.findAllCategory().then((data)=>{
            this.categoryList = data;
          }).catch();
          this.dialogFormVisible = false;
          this.$message({
            message: '保存成功',
            type: 'success'
          });
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
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index,row){
      this.form = {
        no:0,
        name:row.name,
        comment:row.comment,
        parentId:row.parent?row.parent.id:'',
        id:row.id
      };
      this.dialogFormVisible = true;
    },
    handleDelete(index,row){
      this.deleteCategoryById(row.id).then((data)=>{
        if (data.status == 200) {
          this.findAllCategory().then((data)=>{
            this.categoryList = data;
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
  created(){
    this.findAllCategory().then((data)=>{
      this.categoryList = data;
    }).catch();
  }
}
</script>

<style scoped>
  .el-input{
    width:300px;
  }
</style>
<style lang="scss">
  .category{
    .optionDiv{
      button{
        float:right;
        margin-left:10px;
      }
    }
  }

</style>