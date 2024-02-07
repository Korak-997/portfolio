import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PageNotFound from "../views/PageNotFound.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    { path: "/:pathMatch(.*)*", component: PageNotFound },
  ],
});

export default router;
