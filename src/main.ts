import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/tailwind.css";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import ToastService from "primevue/toastservice";

createApp(App)
  .use(ToastService)
  .use(PrimeVue)
  .component("Dialog", Dialog)
  .use(store)
  .use(router)
  .mount("#app");
