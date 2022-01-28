import AppHome from './views/app-home.vue';
import App404 from './views/app-404.vue';

export default [
    {
        path: "/",
        name: "app-home",
        component: AppHome,
    },
    {
        path: "/:path(.*)",
        name: "app-404",
        component: App404,
    } 
]
