import Home from "../components/Home.vue";
import * as VueRouter from "vue-router";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [{ path: "/", component: Home }],
});

export default router;
