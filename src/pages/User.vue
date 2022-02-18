<template>
    <div>
      <h2>用户：{{$route.params.username}}</h2>
    </div>
</template>

<script>
  import { useRoute } from 'vue-router'
  export default {
    setup() {
      const route = useRoute()
      console.log('路径', route.params.username)
    }
  }
</script>

<style scoped>

</style>