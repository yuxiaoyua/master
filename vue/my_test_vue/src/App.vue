<template>
  <div id="app">
    <router-link to="/component/1">跳转路由1</router-link>
    <router-link to="/component/2">跳转路由2</router-link>
    <router-link to="/component/3">跳转路由3</router-link>
    <router-link to="/register">注册</router-link>
    <router-link to="/compfn">compfn</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>