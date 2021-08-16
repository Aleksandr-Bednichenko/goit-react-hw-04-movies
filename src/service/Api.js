const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "62536649c4794eb812bab597e52cdce5";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(`
      ${BASE_URL}/trending/all/day?api_key=${KEY}`).then(
    (response) => response.results
  );
}

export function fetchDetailsMove(movieId) {
  console.log(`${movieId}`);
  return fetchWithErrorHandling(`
      ${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`);
}

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
