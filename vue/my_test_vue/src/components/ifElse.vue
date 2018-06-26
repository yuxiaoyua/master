<template>
  <div class="hello">
    <section v-if="state">
      <label for="">姓名：</label>
      <input type="" name="" value="" v-model="name" placeholder="输入姓名" key="username-input">
    </section>
    <section v-else>
      <label for="">邮箱：</label>
      <input type="" name="" value="" v-model="email" placeholder="输入邮箱" key="email-input">
    </section>
    <button type="" @click="fn">切换</button>
  </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                state: true,
                name: "",
                email: ""
            }
        },
        methods: {
            fn() {
                console.log(this.email)
                this.state = !this.state
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
</style>