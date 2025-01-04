// src/pages/UpcomingPage.js
import React, { useEffect, useState } from 'react';
import { api, endpoints } from '../api/axios';  // Assuming you have an axios instance to handle API calls
import MovieCard from '../components/MovieCard';  // Assuming you have a MovieCard component to display movie details
import './UpcomingPage.css';  // Import the specific CSS file for this page

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const response = await api.get(endpoints.upcoming);  // Adjust the endpoint as needed
      setMovies(response.data.results);
    };

    fetchUpcomingMovies();
  }, []);
  
  if (!movies.length) return <p>Loading...</p>;

  return (
    <div className="upcoming-page">
      <h2>Upcoming Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingPage;
