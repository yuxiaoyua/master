<template>
  <header>
    <div class="user">
      <h1>{{title}}default</h1>
      <span>{{username}}</span>
      <span @click="logout">退出</span>
    </div>
  </header>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        username: localStorage.user,
        canSubmit: true
      }
    },
    computed: mapState({
      title: ({title}) => title.title
    }),
    methods: {
      logout () {
        if (!this.canSubmit) {
          return false
        }
        this.canSubmit = false

        fetcher.post('/wecashMarketSystem/auth/logout').then(res => {
          this.canSubmit = true
          if (Number(res.successful)) {
            localStorage.removeItem('user')
            localStorage.removeItem('market_TOKEN')
            location.assign('#/login')
          } else {
            this.$message(res.errorDescription)
          }
        }, () => {
          this.canSubmit = true
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  header {
    position: fixed;
    top: 0;
    left: 240px;
    z-index: 5;
    width: 100%;
    height: 65px;
    color: #ffffff;
    line-height: 64px;
    background-color: #207fde;
    box-shadow: 0 0 1px 1px rgba(0,0,0,.14);
  }
  h1 {
    float: left;
    padding: 0 20px;
  }
  .user {
    float: right;
    font-size: 18px;
    margin-right: 270px;
    span {
      display: inline-block;
      padding: 0 10px;
      cursor: pointer;
    }
  }
</style>
