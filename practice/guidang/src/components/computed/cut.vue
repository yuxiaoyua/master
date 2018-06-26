<template>
  <div class="cut">
    <button @click="cut">-1</button>
  </div>
</template>
<script>
  export default {
    name: 'cut',
    methods: {
      cut () {
        this.$store.dispatch('cut', 10)
        console.log(this.$store.state.count)
        // console.log(this.$store)
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

