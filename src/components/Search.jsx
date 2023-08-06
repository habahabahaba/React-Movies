import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    searchInput: '',
    searchType: '',
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSearch(
      this.state.searchInput.trim(),
      this.state.searchType
    );
    // this.setState({ searchInput: '' });
  }
  handleFilter(event) {
    this.props.handleSearch(this.state.searchInput.trim(), event.target.value);
    this.setState({ searchType: event.target.value });
  }
  render() {
    const { searchInput } = this.state;
    return (
      <div className='row'>
        <form className='col s12' onSubmit={this.handleSubmit.bind(this)}>
          <div className='input-field '>
            <input
              className='validate'
              type='search'
              placeholder='search...'
              value={searchInput}
              onChange={(ev) => this.setState({ searchInput: ev.target.value })}
            />
            <button type='submit' className='btn search-btn #795548 brown'>
              Search
            </button>
          </div>
          <br />
          <div
            className='radio'
            onChange={(event) => this.handleFilter.bind(this)}
          >
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                value=''
                defaultChecked
                onChange={this.handleFilter.bind(this)}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                value='movie'
                onChange={this.handleFilter.bind(this)}
              />
              <span>Movies</span>
            </label>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                value='series'
                onChange={this.handleFilter.bind(this)}
              />
              <span>Series</span>
            </label>
          </div>
        </form>
      </div>
    );
  }
}
