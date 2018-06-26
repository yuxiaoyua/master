<template>
  <div class="app">
    这里是{{name}}页
    <p>你在哪里啊</p>
  </div>
</template>
<script>
    export default {
        data: function() {
            return {
                name: "app"
            }
        },
        methods:{
            fn(){

            }
        },
        beforeCreate(){
            
        }
    }
</script>
<style>
    .app {
        background: red;
        font-size: 20px;
    }
</style>