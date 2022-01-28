import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import NotFound from "@/pages/NotFound.vue";

export default [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      // NOTE: you can also apply meta information
      // meta: {authRequired: false }
      component: About,
      // NOTE: you can also lazy-load the component
      // component: () => import("@/views/About.vue")
    },
    {
      path: "/:path(.*)",
      name: "NotFound",
      component: NotFound,
    }    
]
