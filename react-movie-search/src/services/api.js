//const API_KEY = "b087d3";
import { OMDB_API_KEY } from "../../config";

const API_KEY = OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";
console.log("OMDb API Key loaded:", API_KEY); 
// ---------- POPULAR MOVIES ----------
export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=war&type=movie`
  );

  const data = await response.json();

  return data.Search || []; // Correct key
};

// ---------- SEARCH MOVIES ----------
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`
  );

  const data = await response.json();

  return data.Search || []; // Correct key
};

