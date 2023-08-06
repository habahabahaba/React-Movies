import React, { Component } from 'react';

import Search from './Search';
import MoviesList from './MoviesList';
import Preloader from './Preloader';

const omdbKey = import.meta.env.VITE_OMDb_KEY;

export default class Main extends Component {
  state = {
    movies: [],
    searchTerm: '',
    searchType: '',
    isLoading: false,
    status: '',
  };

  handleSearch(input, type) {
    this.setState({
      isLoading: true,
      status: '',
      searchTerm: input,
      searchType: type,
    });

    fetch(
      `https://www.omdbapi.com/?apikey=${omdbKey}&s=${input}&type=${type}&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data['Search']) {
          this.setState({
            movies: data['Search'],
            searchTerm: input,
            searchType: type,
            isLoading: false,
          });
        } else {
          this.setState({
            isloading: false,
            status:
              'Nothing was found, please, try different search parameters.',
          });
        }
      })
      .catch((err) => {
        console.error(err);
        this.setState({ isLoading: false });
      });
  }
  render() {
    const { movies, searchTerm, isLoading, status } = this.state;

    return (
      <main className='container content'>
        <Search handleSearch={this.handleSearch.bind(this)} />
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
}
