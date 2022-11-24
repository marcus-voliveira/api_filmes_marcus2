<script>
import GenerosAPI from "@/api/genero";
const generoApi = new GenerosAPI();
export default {
  props: ["id"],
  data() {
    return {
      genres: [],
      generoatual: "",
    };
  },
  async created() {
    this.genres = await generoApi.buscarGeneros();
  },
  methods: {
    mostraGenero() {
      this.$router.push(`/filmes-por-genero/${this.generoatual}`);
    },
  },
};
</script>
<template>
  <header>
    <div>
      <RouterLink to="/"><span>VE Videos</span></RouterLink>
      <span>|</span>
      <RouterLink to="/filmes"><span>Filmes</span></RouterLink>
      <span>|</span>
      <select @change="mostraGenero" v-model="generoatual">
        <option value="" disabled>Gêneros</option>
        <option v-for="genre of genres" :key="genre.id" :value="genre.id">
          {{ genre.name }}
        </option>
      </select>
    </div>
    <div>
      <RouterLink to="/login"><span class="teste">Login</span></RouterLink>
    </div>
  </header>
</template>
