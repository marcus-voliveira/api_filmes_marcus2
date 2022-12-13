<script>
import FilmesAPI from "@/api/filmes";
const filmeApi = new FilmesAPI();
export default {
  props: ["id"],
  data() {
    return {
      filme: {},
    };
  },
  async created() {
    this.filme = await filmeApi.buscarFilmePorId(this.id);
  },
  methods: {
    getImgUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w400${poster_path}`;
    },
  },
};
</script>

<template>
  <div class="infofilme">
    <div class="title">
      <h1>{{ filme.title }}</h1>
    </div>
    <div class="poster-info">
      <div class="infoimg">
        <img :src="getImgUrl(filme.poster_path)" class="poster" />
      </div>
      <div class="infos">
        <p>Duração: {{ filme.runtime }} minutos</p>
        <p>Avaliação: {{ parseFloat(filme.vote_average).toFixed(1) }}</p>
        <p>Sinopse: {{ filme.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>
