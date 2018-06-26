<template>
  <div class="home">
    <navHeader></navHeader>
    <navMenu></navMenu>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navHeader from './basic/navHeader'
import navMenu from './basic/navMenu'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    navHeader,
    navMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  box-sizing: border-box;
  padding: 24px;
  margin: 65px 0 0 240px;
}
</style>
