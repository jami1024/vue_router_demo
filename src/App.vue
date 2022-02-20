<template>
  <div id='app'>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/张三">用户</router-link>
    <router-view/>
    <button @click="jumpToAbout">关于</button>
  </div>

</template>

<script>
  import { useRouter } from 'vue-router'
  export default {
    name: 'App',
    setup() {
      const router = useRouter()
      const jumpToAbout = () => {
        router.push('/about')
      }
      return {
        jumpToAbout
      }
    }
  }
</script>

<style>
</style>
