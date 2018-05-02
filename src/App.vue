<template>
  <div class="App">
  <el-container style="height: 1000%; border: 1px solid #eee">
  <el-aside width="auto" style="background-color: #022050; color: #FFFFFF">
    <el-menu :collapse="isCollapse">
      <el-menu-item index='0'>
        <img src="../static/images/home-logo.jpg" alt="" class="logo-image">
        <span>智能投放系统</span>
      </el-menu-item>
    </el-menu>
    <el-menu :collapse="isCollapse" class="create-banner" router>
      <el-menu-item index="/create">
      <span>+ 新建广告</span>
      </el-menu-item>
    </el-menu>
 <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
  <el-menu-item index="/home">
      <i class="el-icon-message"></i><span slot="title">首页概览</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">广告管理</span>
        </template>
         <el-menu-item index="2-1">广告计划</el-menu-item>
         <el-menu-item index="2-2">广告单元</el-menu-item>
         <el-menu-item index="/origin">广告创意</el-menu-item>
      </el-submenu>
      <el-menu-item index="/source">
        <i class="el-icon-setting"></i><span slot="title">数据中心</span>
      </el-menu-item>
      <el-menu-item index="/tool">
        <i class="el-icon-setting"></i><span slot="title">工具箱</span>
      </el-menu-item>
  </el-menu>
  </el-aside>
  <el-container>
    <p class="el-radio-group" @click="click">展开/收起</p>
    <el-header style="text-align: right; font-size: 12px; background:skyblue">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{username}}</span>
    </el-header>
    <el-main>
       <router-view></router-view>
    </el-main>
  </el-container>
 </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    click () {
      this.isCollapse = !this.isCollapse
    }
  },
  // 在computed计算属性中使用mapState方法将username映射出来
  computed: {
    ...mapState(['username'])
  }
}
</script>

<style scoped>
*{
  padding:0;
  margin:0;
}
html,body{
  width:100%;
  height:100%;
  overflow:hidden;
}
.App {
  width: 100%;
  height: 100%;
  overflow:hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 201px;
  min-height:100%;
  background-color: #022050;
  color:#fff;
}
.el-container{
  position:relative;
  overflow:hidden;
}
.el-radio-group {
  position: absolute;
  top: 0;
  left:0;
  width:40px;
  height:40px;
  background:#ece;
}
.App a{
  text-decoration: none;
}
.el-menu{
  width:100%;
  background-color: #022050;
   color:#fff;
}
.el-menu span{
  color:#fff;
}
.el-submenu .el-menu-item{
  background:#1C2941;
   color:#fff;
}
.el-aside span{
  color:#fff;
}
.el-main{
  background:#eee;
  overflow:auto;

}
.logo-image{
  width:30px;
  height:30px;
  border-radius:50%;
}
.create-banner{
  background-image: linear-gradient(-90deg, #095DE1 0%, #081A6C 94%);
}
</style>
