import Vue from "vue";
import App from "@/App.vue";
import Codyhouse from "./plugins/codyhouse-plugin";
import { createApp, h } from "vue-demi";
import { createPinia, PiniaVuePlugin } from 'pinia'
import router from "@/router";

Vue.config.productionTip = false;
Vue.config.devtools = true;

const pinia = createPinia()

const app = createApp({
  router,
  pinia,
  render: () => h(App),
});

app.use(Codyhouse)
app.use(PiniaVuePlugin)
app.mount("#app");
