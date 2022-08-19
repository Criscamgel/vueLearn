import { createRouter, createWebHashHustory } from "vue-router";
import { Home } from "../views/Home.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]


const router = createRouter({
    history: createWebHashHustory(),
    routes
})

export default router