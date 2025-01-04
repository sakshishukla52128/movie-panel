// src/pages/TopRatedPage.js
import React, { useEffect, useState } from 'react';
import { api, endpoints } from '../api/axios';  // Assuming you have an axios instance to handle API calls
import MovieCard from '../components/MovieCard';  // Assuming you have a MovieCard component to display movie details
import './TopRatedPage.css';  // Import the specific CSS file for this page

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const response = await api.get(endpoints.topRated);  // Adjust the endpoint as needed
      setMovies(response.data.results);
    };

    fetchTopRatedMovies();
  }, []);
  
  if (!movies.length) return <p>Loading...</p>;

  return (
    <div className="top-rated-page">
      <h2>Top Rated Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedPage;
