import React from 'react';

export default function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;
  return (
    <div className='card movie' id='id'>
      <div className='card-image'>
        {poster === 'N/A' ? (
          <img src='https://placehold.co/400x600/d7ccc8/3e2723/?text=Poster\nNot+Found&font=roboto'></img>
        ) : (
          <img src={poster}></img>
        )}
      </div>
      <div className='card-content'>
        <h3 className='card-title'>{title}</h3>
        <h6>{year}</h6>
        <span className='right'>{type}</span>
        <p>
          imdbID: <i>{id}</i>
        </p>
      </div>
    </div>
  );
}
