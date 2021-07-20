import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import Home from "../views/NizaHome.vue";
import Story from "../views/Story.vue";
import Login from "../views/Login.vue";
import Samples from "../views/Samples.vue";
import Gallery from "../views/Gallery.vue";
import Pricing from "../views/Pricing.vue";
import Printing from "../views/Printing.vue";
import Purchase from "../views/Purchase.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    // {
    //   path: "/story",
    //   name: "story",
    //   component: Story
    // },
    // {
    //   path: "/samples",
    //   name: "samples",
    //   component: Samples
    // },
    // {
    //   path: "/gallery",
    //   name: "gallery",
    //   component: Gallery
    // }, {
    //   path: "/pricing",
    //   name: "pricing",
    //   component: Pricing
    // }, {
    //   path: "/printing",
    //   name: "printing",
    //   component: Printing
    // },
    // {
    //   path: "/purchase",
    //   name: "purchase",
    //   component: Purchase
    // }, {
    //   path: "/login",
    //   name: "login",
    //   component: Login
    // }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
