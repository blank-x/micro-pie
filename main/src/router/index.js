import Home from "@/pages/home";
import Login from "@/pages/login"
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];


const router = new VueRouter({
  mode: "history",
  routes,
});

export default router
