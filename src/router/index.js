import { createRouter, createWebHistory } from "vue-router";
import SobreView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sobrenos",
      name: "sobrenos",
      component: SobreView,
    },
  ],
});

export default router;
