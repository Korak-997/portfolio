import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

const app = createApp(App).use(i18n).use(store);
import "./assets/styles/app.css";

app.use(router);

app.mount("#app");
