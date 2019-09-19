<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!-- <router-link to="/one">One</router-link>
    <router-link to="/two">Two</router-link>
    <router-link to="/three">Three</router-link>
    <router-view/> -->
    <!-- <el-button type="success">按钮</el-button> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
