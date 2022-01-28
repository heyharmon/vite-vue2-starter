import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// Import route groups
import pagesRoutes from '@/pages/routes.js'
import appRoutes from '@/app/routes.js'

Vue.use(VueRouter)

export const routes: RouteConfig[] = [
    ...pagesRoutes,
    ...appRoutes,
];

const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes,
})

export default router
