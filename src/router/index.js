import Home from "../components/Home.vue";
import BaseLayout from "../layouts/BaseLayout.vue";
import * as VueRouter from "vue-router";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: BaseLayout,
      children: [{ path: "/", component: Home }],
    },
  ],
});

export default router;
