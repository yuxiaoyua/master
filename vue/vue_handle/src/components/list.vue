<template>
    <ul>
        <li v-for="i in list">{{i.name}}</li>
    </ul>
</template>
<script>
    export default {
        data: function() {
            return {
                list: [{
                    id: "1",
                    name: "zhangsan"
                }, {
                    id: "2",
                    name: "lisi"
                }, {
                    id: "3",
                    name: "wangwu"
                }]
            }
        }
    }
</script>
<style scoped>
    li {
        background: lightblue;
        font-size: 20px;
    }
</style>