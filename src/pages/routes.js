import PagesIndex from './views/pages-index.vue';
import PagesShow from './views/pages-show.vue';

export default [
    {
        path: "/pages",
        name: "pages-index",
        component: PagesIndex,
        props: true,
    },
    {
        path: "/pages/:pageId",
        name: "pages-show",
        component: PagesShow,
        props: true,
    }
]
