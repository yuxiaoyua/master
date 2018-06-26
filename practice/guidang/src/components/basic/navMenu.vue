<template>
  <nav class="nav">
    <h1 class="logo">We Mall</h1>
    <el-menu class="slidebar" router theme="dark">
      <template v-for="(menu, index) in menus">
        <el-submenu v-if="menu.childMenu.length > 0" :index="''+index">
          <template slot="title">{{ menu.menuName }}</template>
          <el-menu-item v-for="(child, indexs) in menu.childMenu" :key="indexs" :index="index+'-'+indexs" :route="child.route">{{ child.menuName }}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :route="menu.route">{{ menu.menuName }}</el-menu-item>
      </template>
    </el-menu>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        menus: []
      }
    },
    mounted () {
      this.getMenu()
    },
    methods: {
      getMenu () {
        this.$http.get('/wecashMarketSystem/user/getCurrentUserMenu').then(res => {
          console.log(res.data)
          if (Number(res.successful)) {
            this.menus = res.data
          } else {
          }
        })
      }
    }
  }
</script>
<style>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100%;
    background: #324157;
  }
  .logo {
    height: 65px;
    color: #bfcbd9;
    font-size: 22px;
    font-weight: bold;
    line-height: 65px;
    padding: 0 16px;
    box-shadow: 0 0 1px 1px rgba(0,0,0,.14);
  }
  .nav .slidebar {
    margin-top: 2px;
  }
</style>
