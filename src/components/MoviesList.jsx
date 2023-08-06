import React from 'react';

import Movie from './Movie';

export default function MoviesList(props) {
  const { movies } = props;
  return (
    <div className='movies'>
      {movies.map((mov) => (
        <Movie key={mov['imdbID']} {...mov} />
      ))}
    </div>
  );
}
