<template>
  <div class="main">
    <Add></Add>
    <Display></Display>
    <Cut></Cut>
  </div>
</template>
<script>
import Add from './add'
import Display from './display'
import Cut from './cut'
export default {
  name: 'main',
  components: {
    Add,
    Display,
    Cut
  }
}
</script>

