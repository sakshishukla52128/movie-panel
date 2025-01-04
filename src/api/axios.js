// src/api/axios.js
import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';

export const api = axios.create({
  baseURL: BASE_URL,
});

export const endpoints = {
  popular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  upcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  movieDetails: (id) => `/movie/${id}?api_key=${API_KEY}&language=en-US`,
  movieCast: (id) => `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  search: (query) => `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
};
