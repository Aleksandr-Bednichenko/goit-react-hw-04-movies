import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "62536649c4794eb812bab597e52cdce5";
const page = 1;
export function fetchTrendingMovies() {
  return axios
    .get(
      `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=en-US&page=${page}`
    )
    .then((response) => {
      return response.data;
    });
}

export function fetchDetailsMovie(moviesId) {
  return axios
    .get(`${BASE_URL}/movie/${moviesId}?api_key=${KEY}&language=en-US`)
    .then((response) => {
      return response.data;
    });
}

export function fetchActors(moviesId) {
  return axios
    .get(`${BASE_URL}/movie/${moviesId}/credits?api_key=${KEY}&language=en-US`)
    .then((response) => {
      return response.data;
    });
}
export function fetchReview(moviesId) {
  return axios
    .get(`${BASE_URL}/movie/${moviesId}/reviews?api_key=${KEY}&language=en-US`)
    .then((response) => {
      return response.data;
    });
}

export function fetchQuery(search) {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${search}`
    )
    .then((response) => {
      return response.data;
    });
}
