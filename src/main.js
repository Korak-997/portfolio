import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import i18n from "./i18n"

import {
  faHouse,
  faInfo,
  faPlus,
  faBars,
  faXmark,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHouse,
  faInfo,
  faPlus,
  faBars,
  faXmark,
  faCalendar
);

const app = createApp(App).use(i18n).use(store);
import "./assets/styles/app.css";
import store from "./store";
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
