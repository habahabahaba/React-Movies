import React, { Component } from 'react';

import Search from './Search';
import MoviesList from './MoviesList';
import Preloader from './Preloader';
import { useState } from 'react';

const omdbKey = import.meta.env.VITE_OMDb_KEY;

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  function handleSearch(input, type) {
    setIsLoading(true);
    setStatus('');
    setSearchTerm(input);
    setSearchType(type);

    fetch(
      `https://www.omdbapi.com/?apikey=${omdbKey}&s=${input}&type=${type}&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data['Search']) {
          setMovies(data['Search']);
        } else {
          setStatus(
            'Nothing was found, please, try different search parameters.'
          );
        }
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }

  return (
    <main className='container content'>
      <Search handleSearch={handleSearch} />
      {!searchTerm.length ? (
        <h5>Please, use the search field above.</h5>
      ) : status ? (
        <h5>{status}</h5>
      ) : !isLoading ? (
        <MoviesList movies={movies} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
