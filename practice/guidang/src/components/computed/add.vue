<template>
  <div class="add">
    <button @click="addNum">+1</button>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'add',
    methods: {
      ...mapActions(['add']),
      addNum () {
        // console.log(this.$store.state.order)
        this.add()
      }
    }
  }
</script>
<style>
button{
  width:100px;
  height:100px;
  font-size: 30px;
}
</style>

