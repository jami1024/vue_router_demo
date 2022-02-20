<template>
    <div>
      <h2>首页</h2>
      <router-link to="/home/message">消息</router-link>
      <router-link to="/home/shops">商品</router-link>
      <router-view/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>