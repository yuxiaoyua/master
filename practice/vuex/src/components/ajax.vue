<template>
  <div class="hello">
      <span>{{index}}</span>
      <span>{{tab}}</span>
      <span>{{numgetter}}</span>
       <button type="" @click="clickfn">点击</button>
  </div>
</template>

<script>
    import {
        mapState,
        mapMutations,
        mapActions,
        mapGetters
    } from "vuex"
    import {
        ADD_TAB
    } from "../store/type_mutation"
    export default {
        name: 'hello',
        data() {
            return {
                msg: 5
            }
        },
        computed: {
            ...mapState({
                index: state => state.a.index,
                tab: state => state.a.tab,
            }),
            ...mapGetters([
                "numgetter"
            ])
        },
        methods: {
            ...mapActions([
                ADD_TAB.action_type
            ]),
            clickfn() {
                this[ADD_TAB.action_type](this)

                var _this = this
                    // this.ajaxIndex(this).then(function() {
                    //         return _this.ajaxTab(_this)
                    //     }).then(function() {
                    //         console.log("ok")
                    //     })
                    // this.$store.commit("ajaxIndex", this).then(function(data) {
                    //         return _this.$store.commit("ajaxTab", _this)
                    //     }).then(function(data) {
                    //         console.log("ok")
                    //     })


                // this.ajaxIndex()
                // this.ajaxTab()
            }
        },

        mounted() {

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