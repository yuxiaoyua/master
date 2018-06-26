<template>
    <div class="register">
        <!-- 表单验证  -->
        <form action="#" class="form">
            <div class='tel'>
                <input type="tel" placeholder='手机号' v-model="telphone" @keyup="disabled=true" v-register="{setRegisterParams:setRegisterParams}" />
                <span v-show="toastShow" class="toast">{{toastText}}</span>
            </div>
            <div class="code">
                <input type="text" placeholder="验证码">
                <button type="button" :disabled="disabled" class="get_code" @click="timeOut">
                    {{timerCodeMsg}}
                </button>
            </div>
            <button class='register' @click.prevent='registerUser' :disabled="disabled">
                {{regText}}
            </button>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      propsMainColor: 'rgba(91,91,91,1)',
      telphone: '', // 电话号码
      toastShow: false, // 默认不显示提示信息
      toastText: '', // 提示信息内容
      time: 0,
      second: 60,
      disabled: true,
      regText: '注册',
      regLoadShow: false
    }
  },
  methods: {
    // 获取验证码倒计时
    timer () {
      if (this.time > 0) {
        this.time -= 1
        setTimeout(this.timer, 1000)
      }
    },
    timeOut () {
      this.time = this.second
      this.timer()
    },
    setRegisterParams (toastShow, toastText, isDisabled = true) {
      this.toastShow = toastShow
      this.toastText = toastText
      this.disabled = isDisabled
    },
    // 注册
    registerUser () {
      if (this.regLoadShow === false) {
        this.regLoadShow = true
      }
    }
  },
  computed: {
    timerCodeMsg () {
      return this.time > 0 ? `${this.time}s后重新获取` : '获取验证码'
    }
  },
  directives: {
      // 验证手机号
    register: {
      inserted (el, binding) {
          // 聚焦元素
        el.focus()
        el.addEventListener('blur', () => {
          if (el.value === '') {
            binding.value.setRegisterParams(true, '请输入手机号')
          } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(el.value))) {
            binding.value.setRegisterParams(true, '号码格式有误')
          } else {
            binding.value.setRegisterParams(true, '', false)
          }
        }, 'false')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
a,button,input,optgroup,select,textarea {
    -webkit-tap-highlight-color: rgba(0,0,0,0)
}
input {
	-webkit-appearance: none;
	outline: none;
}
.head_title {
    left: 0.4rem;
    @include sc(0.7rem, $white);
    @include center;
    font-size: .5rem;
}
.form{
    @include wh(85%,auto);
    margin: 6rem auto 0;
    .tel,.code{
        height: 1rem;
        border: 1px solid #ccc;
        input{
            outline: 0;
            z-index: 999;
            font-size: .45rem;
            border-radius: 0;
            border: 0 none;
            padding: .25rem 0;
            display: inline-block;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            text-indent: .5em;
        }
    }
    .tel {
        position: relative;
        input{
            width: 100%;
            top: 1px;
            position: absolute;
        }
        .toast{
            top: 0;
            right: .4rem;
            color: #ccc;
            z-index: 999;
            @include wh(auto,100%);
            position: absolute;
            line-height: 1rem;
            transform: scale(1);
            font-size: .45rem;
        }
    }
    .code{
        display: flex;
        border-top: none;
        input{
            flex: 1;
        }
        .get_code{
            @include wh(3.5rem,100%);
            outline: 0;
            padding: 0;
            border: 0 none;
            background: none;
            font-size: .45rem;
            display: inline-block;
            border-left: 1px solid #ccc;
        }
    }
}
.register{
    display: block;
    @include wh(100%,1.2rem);
    border: 1px solid #333;
    text-align: center;
    border-radius: .2rem;
    margin-top: 2rem;
    line-height: 1.2rem;
    background: none;
    font-size: .5rem;
    position: relative;
    .loading{
        @include ct;
    }
}
</style>

