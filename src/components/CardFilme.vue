<script>
export default {
  props: ["filme"],
  methods: {
    getImgUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
};
</script>
<template>
  <img :src="getImgUrl(filme.poster_path)" alt="filme" />
</template>
