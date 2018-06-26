<template>
  <div class="hello">
      <ul >
          <li v-for="i in data.data.list">
              <span>{{i.id}}</span>
              <p><img :src="i.img" alt=""></p>
              <p>{{i.address}}</p>
              <p>{{i.name}}</p>
          </li>
      </ul>
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
                data: null
            }
        },
        computed: {


        },
        methods: {

        },

        mounted() {
            console.log(this.$(".hello"))
            var _this = this
            this.axios.get("/users", {
                params: {
                    id: 12345
                }
            }).then(function(data) {
                _this.data = data.data
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>