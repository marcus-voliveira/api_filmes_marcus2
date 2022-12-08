<script></script>
<template>
  <header>
    <RouterLink to="/">VE Videos</RouterLink>
    <RouterLink to="/filmes">Filmes</RouterLink>
    <RouterLink to="/sobrenos">Sobre Nós</RouterLink>
  </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

* {
  text-decoration: none;
  font-family: 'Inter', sans-serif;
}

a {
  font-size: 35px;
  color: white;
  padding: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
}

header {
  display: flex;
  background-color: rgb(55, 55, 55);
  border: 3px;
  border-color: #e1e130;
  border-radius: 25px;
  border-style: solid;
}

h1 {
  font-family: "Open Sans", sans-serif;
  font-size: 35px;
  color: white;
  padding: 40px;
  padding-top: 0px;
  padding-bottom: 0px;
}

h2 {
  font-size: 35px;
  color: white;
  padding: 40px;
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
