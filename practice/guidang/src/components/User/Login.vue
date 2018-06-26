<template>
  <div class="login" id="particles-box">
    <section class="login-content">
      <h1 class="login-title">Wecash Mall</h1>
      <form id="loginForm" class="login-form" @keyup.enter="submit">
        <section class="login-wrap">
          <label :class="{'focus-label': userFocus}">用户名</label>
          <input
            type="text"
            name="username"
            @focus="userFocus = !userFocus"
            @blur="userFocus = !userFocus"
            v-model="username"
          >
        </section>
        <section class="login-wrap">
          <label :class="{'focus-label': passFocus}">登录密码</label>
          <input
            type="password"
            name="password"
            @focus="passFocus =! passFocus"
            @blur="passFocus = !passFocus"
            v-model="password"
          >
        </section>
        <section class="login-btn">
          <button type="button" @click="submit">登录{{count}}</button>
        </section>
      </form>
    </section>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        username: '',
        password: '',
        userFocus: false,
        passFocus: false,
        canSubmit: true
      }
    },
    mounted () {
      particlesJS.load('particles-box', 'static/data/particles.json', function () {
        console.log('callback - particles-js config loaded')
      })
    },
    computed: {
      ...mapGetters(['count'])
    },
    methods: {
      ...mapActions(['add']),
      submit () {
        // this.add()
        // console.log(this.$store)
        if (!this.canSubmit) {
          return false
        }
        if (this.username === '' && this.password === '') {
          return false
        }
        this.canSubmit = false
        this.$http.post('/wecashMarketSystem/auth/login', {
          username: this.username,
          password: this.password
        }).then((res) => {
          this.canSubmit = true
          if (Number(res.successful)) {
            localStorage.setItem('user', this.username)
            localStorage.setItem('market_TOKEN', res.data.headerValue)
            location.assign('/home/role')
          }
        }, () => {
          this.canSubmit = true
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .login {
    width: 100%;
    height: 100%;
    background: url(../../assets/images/bg2.jpg) no-repeat 0 0;
    background-size: cover;
  }
  .login-content {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    height: 400px;
    width: 500px;
    text-align: center;
    color: rgba(255, 255, 255, 0.870588);
    background-color: rgba(0,0,0,.3);
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    box-shadow: rgba(0, 0, 0, 0.188235) 0px 10px 30px, rgba(0, 0, 0, 0.227451) 0px 6px 10px;
    border-radius: 2px;
  }
  .login-title {
    width: 100%;
    height: 30%;
    background-color: transparent;
    font-size: 25px;
    color: white;
    line-height: 120px;
  }
  .login-form {
    height: 70%;
    label {
      display: inline-block;
      max-width: 100%;
      margin-bottom: 5px;
      font-weight: 700;
      position: absolute;
      line-height: 22px;
      top: 38px;
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      z-index: 1;
      cursor: text;
      transform: scale(1) translate(0px, 0px);
      transform-origin: left top 0px;
      pointer-events: none;
      user-select: none;
      color: rgba(255, 255, 255, 0.8);
    }
    .focus-label {
      color: rgb(0, 188, 212);
      transform: scale(0.74) translate(0, -28px);
    }
    input {
      box-sizing: border-box;
      position: relative;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background-color: rgba(0, 0, 0, 0);
      color: rgba(255, 255, 255, 0.870588);
      font-style: inherit;
      font-variant: inherit;
      font-weight: inherit;
      font-stretch: inherit;
      font-size: inherit;
      line-height: inherit;
      font-family: inherit;
      margin-top: 14px;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      border-bottom: rgb(224, 224, 224);
    }
  }
  .login-wrap {
    font-size: 16px;
    line-height: 24px;
    width: 60%;
    height: 72px;
    display: inline-block;
    position: relative;
    background-color: transparent;
    font-family: Roboto, sans-serif;
    transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }
  .normal-hr, .blur-hr {
    position: absolute;
    width: 100%;
    border: 0;
    border-bottom: 1px solid rgb(224, 224, 224);
    bottom: 8px;
    box-sizing: content-box;
  }
  .blur-hr {
    transform: scaleX(0);
    border-bottom: 2px solid rgb(0, 188, 212);
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }
  .focus-hr {
    transform: scaleX(1);
  }
  .error-hr {
    transform: scaleX(1);
    border-bottom: 2px solid rgb(244, 67, 54);
  }
  .error-tip {
    display: none;
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    font-size: 12px;
    line-height: 12px;
    color: rgb(244, 67, 54);
  }
  .errtip-block {
    display: block;
  }
  .login-btn {
    margin-top: 30px;
    button {
      min-width: 88px;
      width: 60%;
      border: 10px;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      cursor: pointer;
      outline: none;
      font-size: 24px;
      height: 42px;
      border-radius: 2px;
      background-color: rgba(0, 188, 212, 0.7);
      color: rgb(255, 255, 255);
      box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
      &:active {
        box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;
      }
    }
  }
</style>
