// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


// 配置映射关系

// 懒加载配置，分包
const routes = [
    { path: '/', redirect: '/home' },
    { 
        path: '/home',
        component: () => import('../pages/Home.vue'),
        children: [
            {
                path: 'message',
                component: () => import('../pages/Homemessage.vue')
            },
            {
                path: 'shops',
                component: () => import('../pages/HomeShops.vue')
            }
        ]
    },
    { path: '/about', component: () => import('../pages/About.vue') },
    { path: '/user/:username', component: () => import('../pages/User.vue') },
    { path: '/:pathMatch(.*)', component: () => import('../pages/404.vue') },
]


// 创建路由对象router

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router