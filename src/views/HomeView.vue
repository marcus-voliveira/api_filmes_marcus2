<script>
import CardFilme from "@/components/CardFilme.vue";
import FilmesAPI from "@/api/filmes";
const filmeApi = new FilmesAPI();

export default {
  components: { CardFilme },
  data() {
    return {
      destaques: [],
      populares: [],
    };
  },
  async created() {
    this.destaques = await filmeApi.buscarDestaques();
    this.populares = await filmeApi.buscarPopulares();
  },
};
</script>

<template>
  <h2>Destaques</h2>
  <div class="row">
    <CardFilme
      v-for="filme in destaques.slice(0, 6)"
      :key="filme.id"
      :filme="filme"
    />
  </div>

  <h2>Filmes Populares</h2>
  <div class="row">
    <CardFilme
      v-for="filme in populares.slice(0, 6)"
      :key="filme.id"
      :filme="filme"
    />
  </div>
</template>

<style scoped>
img {
  width: 40%;
  z-index: 2;
  width: 300px;
  margin: 20px;
}

.row {
  display: flex;
  overflow-y: auto;
}
</style>
