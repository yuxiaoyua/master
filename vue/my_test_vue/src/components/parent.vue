<template>
  <ul>  
        <router-link to="/parent/child1">child1</router-link>
        <router-link to="/parent/child2">child2</router-link>
        <router-link to="/parent/child3">child3</router-link>
        <router-view></router-view>
        <router-view name="a"></router-view>
        <router-view name="b"></router-view>
  </ul>

</template>
<script>
    export default {
        name: "register",
        data: function() {
            return {

            }
        },
        methods: {

        },
        mounted() {
            this.axios.get("/index").then(function(data) {
                console.log(data)
            })

        }
    }
</script>
<style>

</style>