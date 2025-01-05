// src/pages/SearchResultsPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { api, endpoints } from '../api/axios';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) return;
      setLoading(true);
      setError(null);
      try {
        const response = await api.get(endpoints.searchMovies(query));
        setResults(response.data.results);
      } catch (err) {
        setError('Something went wrong while fetching search results.');
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="search-results-container">
      <h2>Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No results found. Try searching for something else!</p>
      ) : (
        <div className="search-results-grid">
          {results.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : '/placeholder.png'
                }
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>Rating: {movie.vote_average || 'N/A'}</p>
              <p>Release: {movie.release_date || 'Unknown'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
