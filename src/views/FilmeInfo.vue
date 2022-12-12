<script></script>

<template>
  <div class="movieinfo">
    <div class="title">
      <h1>{{ movie.title }}</h1>
    </div>
    <div class="poster-info">
      <div class="infoimg">
        <img :src="getImgUrl(movie.poster_path)" class="poster" />
      </div>
      <div class="infos">
        <p>Duração: {{ movie.runtime }} minutos</p>
        <p>Avaliação: {{ parseFloat(movie.vote_average).toFixed(1) }}</p>
        <p>Sinopse: {{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>
