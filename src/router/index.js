import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


// 配置映射关系

const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
]


// 创建路由对象router

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router