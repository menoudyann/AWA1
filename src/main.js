import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./assets/style.css";
import { MotionPlugin } from '@vueuse/motion'
import CanvasJSChart from '@canvasjs/vue-charts';

const app = createApp(App);
app.use(router);
app.use(MotionPlugin);
app.use(CanvasJSChart);
app.mount("#app");
