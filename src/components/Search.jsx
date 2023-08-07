import React from 'react';
import { useState } from 'react';

export default function Search({ handleSearch = Function.prototype }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch(searchInput.trim(), searchType);
  }
  function handleFilter(event) {
    handleSearch(searchInput.trim(), event.target.value);
    setSearchType(event.target.value);
  }

  return (
    <div className='row'>
      <form className='col s12' onSubmit={handleSubmit}>
        <div className='input-field '>
          <input
            className='validate'
            type='search'
            placeholder='search...'
            value={searchInput}
            onChange={(ev) => setSearchInput(ev.target.value)}
          />
          <button type='submit' className='btn search-btn #795548 brown'>
            Search
          </button>
        </div>
        <br />
        <div
          className='radio'
          // onChange={(event) => handleFilter}
        >
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              value=''
              defaultChecked
              onChange={handleFilter}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              value='movie'
              onChange={handleFilter}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              value='series'
              onChange={handleFilter}
            />
            <span>Series</span>
          </label>
        </div>
      </form>
    </div>
  );
}
