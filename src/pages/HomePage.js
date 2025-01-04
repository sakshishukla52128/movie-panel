// src/pages/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';
import MovieCard from '../components/MovieCard';
import './HomePage.css'
const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.popular);

  useEffect(() => {
    dispatch(fetchMovies('popular'));
  }, [dispatch]);

  return (
    <div className="page">
      <h2>Popular Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
