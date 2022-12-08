import { createRouter, createWebHistory } from "vue-router";
import SobreView from "../views/SobreView.vue";
import FilmesView from "../views/FilmesView.vue";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sobrenos",
      name: "sobrenos",
      component: SobreView,
    },
    {
      path: "/filmes",
      name: "filmes",
      component: FilmesView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
