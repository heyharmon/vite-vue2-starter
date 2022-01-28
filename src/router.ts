import Vue from "vue";
import VueRouter, { RouteConfig } from 'vue-router';
import sampleRouteGroup from '@/routes/sample.js'

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
    ...sampleRouteGroup
];

const router = new VueRouter({
    base: "/",
    mode: "history",
    routes,
});

export default router;

// import Vue from 'vue';
// import VueRouter, { RouteConfig } from 'vue-router';
// 
// // import { default as sampleRoutes } from '@/router/sample.js'
// import sampleRoutes from '@/router/sample.js'
// 
// Vue.use(VueRouter);
// 
// export const routes: createRouter[] = [
//     ...sampleRoutes
// ];
// 
// const router = new VueRouter({
//     base: "/",
//     mode: "history",
//     routes,
// });
// 
// export default router;
