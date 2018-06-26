<template>
  <ul>
    <li><label for="">用户名：</label><input type="text" v-model="username"></li>
     <li><label for="">手机号：</label><input type="number" v-model="phone"></li>
      <li><label for="">密码</label><input type="text" v-model="password"></li>
      <li><button type="" @click="submitFn">提交</button></li>
  </ul>

</template>
<script>
    export default {
        name: "register",
        data: function() {
            return {
                username: "",
                phone: "",
                password: ""
            }
        },
        methods: {
            submitFn: function() {
                console.log(this.username)
                console.log(this.phone)
                console.log(this.password)
                console.log(this)
                    // this.axios.post("/register", {
                    //     username: this.username,
                    //     phone: this.phone,
                    //     password: this.password,

                // }).then(function(data) {
                //     console.log(data.data)
                // })
                this.axios.get("/register", {
                    params: {
                        username: this.username,
                        phone: this.phone,
                        password: this.password,
                    }


                }).then(function(data) {
                    console.log(data.data)
                })
            }
        }
    }
</script>
<style>

</style>