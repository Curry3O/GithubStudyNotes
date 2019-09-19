<template>
  <div class="home">
    <div class="headerDiv">
        <span>看点资讯</span>
    </div>
    <div class="contentDiv">
        <el-row>
            <el-col :span="4" class="heightDiv navDiv">
                <el-menu router
                default-active="/index"
                class="el-menu-vertical-demo">
                <el-menu-item index="/index">
                    <i class="el-icon-coordinate"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="/category">
                    <i class="el-icon-menu"></i>
                    <span slot="title">栏目管理</span>
                </el-menu-item>
                <el-menu-item index="/article">
                    <i class="el-icon-document"></i>
                    <span slot="title">文章管理</span>
                </el-menu-item>
                <el-menu-item index="/user">
                    <i class="el-icon-setting"></i>
                    <span slot="title">用户管理</span>
                </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="20" class="heightDiv routerDiv">
                <div>
                    <router-view></router-view>
                </div>
            </el-col>
        </el-row>
    </div>
    <div class="footerDiv">
        <span>版权所有：&copy;Web1901班级</span>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data () {
    return {
      
    }
  },
  mounted(){
      this.$router.push('/index');
      $('.heightDiv').height($(window).height()-60-30);
  }
}
</script>
<style>
    .el-menu{
        border-right: 0;
        background:none;
    }
</style>
<style scoped lang="scss">
    .home{
        .headerDiv{
            height:60px;
            color:white;
            background:#232323;
            span{
                line-height: 60px;
                margin-left: 60px;
                font-size: 20px;
            }
        }
        .contentDiv{
			.navDiv{
                background: #ccc;
            }
            .routerDiv{
                padding: 10px;
            }
		}
        .footerDiv{
            background: teal;
            color: white;
            text-align: center;
            position: fixed;
            z-index: 1000;
            bottom: 0;
            width: 100%;
            height: 30px;
            span{
                line-height: 30px;
            }
        }
        
    }
</style>