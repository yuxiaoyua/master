<template>
  <div class="hello">
        测试非prop
        <comp class="aa"></comp>
  </div>
</template>

<script>
    import component1 from "./component1.vue"
    export default {
        name: 'hello',
        data() {
            return {
                state: true,
                name: "",
                email: ""
            }
        },

        components: {
            "comp": component1
        },
        methods: {
            fn(id) {
                console.log("进行数据请求id" + id)
                var state = true;
                // if(state){

                // }else{
                //     this.$router.go(-1)
                // }
            }
        },


        // watch: {
        //     $route(to, from) {
        //         console.log(to)
        //         this.fn()
        //     }
        // },
        mounted() {

            // console.log(this.$route)
            // this.fn()
        },
        // beforeRouteEnter(to, from, next) {
        //     console.log(to)
        //     console.log("before数据请求")
        //     var state = true
        //     if (state) {
        //         next()
        //     } else {
        //         next(false)
        //     }
        //     // next(vm => {
        //     //     vm.fn(to.params.id)
        //     // })
        // },
        // beforeRouteUpdate(to, from, next) {
        //     console.log("update数据请求")
        //     console.log(to)
        //     var state = false
        //     if (state) {
        //         next()
        //     } else {
        //         next(false)
        //     }
        // },
        // beforeRouteLeave(to, from, next) {

        // }
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