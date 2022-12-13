import { createRouter, createWebHistory } from "vue-router";
import SobreView from "../views/SobreView.vue";
import FilmesView from "../views/FilmesView.vue";
import HomeView from "../views/HomeView.vue";
import FilmeInfo from "../views/FilmeInfo.vue";
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
    {
      path: "/filme/:id",
      name: "filmeinfo",
      component: FilmeInfo,
      props: true,
    },
  ],
});

export default router;
