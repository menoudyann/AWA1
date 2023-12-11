import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./assets/style.css";
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App);
app.use(router);
app.use(MotionPlugin);
app.mount("#app");
