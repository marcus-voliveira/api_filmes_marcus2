<script>
export default {
  props: ["filme"],
  methods: {
    getImgUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    MostraFilme(filme) {
      this.$router.push(`filme/${filme.id}`);
    },
  },
};
</script>
<template>
  <img
    @click="MostraFilme(filme)"
    :src="getImgUrl(filme.poster_path)"
    alt="filme"
  />
</template>
