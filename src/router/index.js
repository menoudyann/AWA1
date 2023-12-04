import Home from "../components/Home.vue";
import BaseLayout from "../layouts/BaseLayout.vue";
import ContactForm from "../components/ContactForm.vue";
import NotFoundComponent from "../components/errors/NotFoundComponent.vue";
import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      { path: "/", component: Home },
      { path: "/contact", component: ContactForm }
    ],
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundComponent, // Replace with the component for your 404 page
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
