import axios from "axios";
export default class FilmesAPI {
  async buscarDestaques() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=2152ef1368852664d60f5be1aca1a0fb"
    );
    return data.results;
  }
  async buscarFilmePorId(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=2152ef1368852664d60f5be1aca1a0fb&language=pt-BR`
    );
    return data;
  }
  async buscarPopulares() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=2152ef1368852664d60f5be1aca1a0fb&language=pt-BR&page=1"
    );
    return data.results;
  }
  async buscarSeries() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}?api_key=2152ef1368852664d60f5be1aca1a0fb&language=pt-BR"
    );
    return data.results;
  }
}
