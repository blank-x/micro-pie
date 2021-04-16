import Home from "@/pages/home";
import Layout from "@/layout"
import Login from "@/pages/login"
import VueRouter from "vue-router";

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/",
        component: Layout,
        name:'layout',
        children: [{
            path: '/',
            name: 'home',
            component: Home
        },{
            path: '*',
        }]
    }


];


const router = new VueRouter({
    mode: "history",
    routes,
});

export default router
