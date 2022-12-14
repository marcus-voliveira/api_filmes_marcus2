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

<style scoped>
.infofilme {
  margin: 60px;
  padding: 40px;
  color: white;
  background-color: rgb(39, 38, 38);
  border-radius: 30px;
}
img {
  border-radius: 30px;
}

.poster-info {
  display: flex;
}

.StyleRating {
  border-radius: 360px;
  background-color: #e1e130;
}

.infos {
  width: 450px;
}

p {
  font-family: "Inter", sans-serif;
  margin-left: 70px;
}

h1 {
  font-family: "Montserrat", sans-serif;
  margin-top: 0px;
  margin-bottom: 40px;
}
</style>
