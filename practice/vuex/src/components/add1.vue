<template>
  <div class="hello">
    <span>{{nums}}</span>
    <span>{{numgetter}}</span>
    <button type="" @click="addAction(4)">点击</button>
  </div>
</template>

<script>
    import {
        mapState,
        mapMutations,
        mapActions,
        mapGetters
    } from "vuex"

    export default {
        name: 'hello',
        data() {
            return {
                msg: 5
            }
        },
        computed: {
            // ...mapState(["num"])
            ...mapState({
                nums: state => state.num
            }),
            ...mapGetters(["numgetter"])

        },
        methods: {
            ...mapMutations([
                "addfn"
            ]),
            ...mapActions(["addAction"])
        },
        // computed: mapState({
        //     nums(state) {
        //         return state.num + this.msg
        //     }
        // }),
        mounted() {
            // console.log(this.$store)
            var _this = this
                // setInterval(function() {
                //     // _this.$store.commit("addfn", 2)
                //     _this.addfn(2)
                // }, 1000)
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