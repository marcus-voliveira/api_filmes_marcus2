import { createRouter, createWebHistory } from "vue-router";
import SobreView from "../views/SobreView.vue";
import GenerosView from "../views/GenerosView.vue";
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
      path: "/generos",
      name: "generos",
      component: GenerosView,
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
