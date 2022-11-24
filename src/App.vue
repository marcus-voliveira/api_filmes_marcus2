<script>
import CabecalhoComp from "./components/CabecalhoComp.vue";
import FilmesAPI from "@/api/filmes";
const filmeApi = new FilmesAPI();
export default {
  components: { CabecalhoComp },
  data() {
    return {
      destaques: [],
    };
  },
  async created() {
    this.destaques = await filmeApi.buscarDestaques();
  },
};
</script>

<template>
  <CabecalhoComp />

  <main>
    <RouterView />
  </main>
</template>

<style>
.container {
  display: flex;
}

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

<!-- <h2>Destaques</h2>
    <div class="row">
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
    </div>

    <h2>Filmes</h2>
    <div class="row">
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
    </div>

    <h2>Séries</h2>
    <div class="row">
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
    </div> -->
