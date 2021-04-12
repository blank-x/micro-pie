import Home from "@/pages/home/index.vue";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];


const router = new VueRouter({
  mode: "history",
  routes,
});

export default router
