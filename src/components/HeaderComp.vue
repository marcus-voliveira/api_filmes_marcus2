<script></script>
<template>
  <header>
    <RouterLink to="/">VE Videos</RouterLink>
    <RouterLink to="/filmes">Gêneros</RouterLink>
    <RouterLink to="/sobrenos">Sobre Nós</RouterLink>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap");

* {
  text-decoration: none;
}

a {
  font-family: "Montserrat", sans-serif;
  font-size: 35px;
  color: white;
  margin: 6px;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}

header {
  display: flex;
  background-color: rgb(39, 38, 38);
  border: 3px;
  border-color: #e1e130;
  border-radius: 25px;
  border-style: solid;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 35px;
  color: white;
  padding: 40px;
  padding-top: 0px;
  padding-bottom: 0px;
}

h2 {
  font-size: 35px;
  color: white;
  padding: 30px;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: rgb(39, 38, 38);
  display: inline-block;
  border-radius: 20px;
}
</style>
