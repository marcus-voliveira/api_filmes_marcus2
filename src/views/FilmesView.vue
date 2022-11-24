<script>
import CatalogoFilmes from "../components/CatalogoFilmes.vue";
import FilmesAPI from "@/api/filmes";
const filmeApi = new FilmesAPI();
export default {
  components: { CatalogoFilmes },
  data() {
    return {
      lancamentos: [],
      populares: [],
    };
  },
  async created() {
    this.lancamentos = await filmeApi.buscarLancamentos();
    this.populares = await filmeApi.buscarPopulares();
  },
};
</script>
<template>
  <h1 class="nome">Filmes</h1>
  <CatalogoFilmes :filmes="lancamentos" titulo="Lançamentos" />
  <CatalogoFilmes :filmes="populares" titulo="Populares" />
</template>
