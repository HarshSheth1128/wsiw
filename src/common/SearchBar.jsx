import React, { Component } from 'react';
import './SearchBar.scss';
import Search from '../assets/search.svg';
import Poster from '../assets/poster.jpg';
import Plus from '../assets/plus.svg';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: new Array(10).fill({
        moviePoster: Poster,
        title: 'Star Wars',
        year: '(2019)',
        runtime: '120 min',
      }),
      isSearchOpen: false,
    };
  }

  handleChange = e => {
    if (e.target.value !== '') {
      this.setState({ isSearchOpen: true });
    } else {
      this.setState({ isSearchOpen: false });
    }
  };

  render() {
    let SearchClass = 'SearchResults open';

    if (this.state.isSearchOpen) {
      SearchClass = 'SearchResults open';
    } else {
      SearchClass = 'SearchResults';
    }

    return (
      <div className="SearchContainer">
        <div className="SearchBar">
          <img
            className="SearchIcon"
            height="50px"
            src={Search}
            alt="Search Icon"
          />
          <div className="SearchBarLine" />
          <input onChange={this.handleChange} placeholder="Search here" />
        </div>
        <div className={SearchClass}>
          {this.state.searchResults.map(result => (
            <>
              <div className="SearchResult">
                <img
                  className="SearchPoster"
                  src={result.moviePoster}
                  alt="Poster"
                />
                <div className="MovieInfo">
                  <div className="MovieTitle">
                    <h1>{`${result.title} ${result.year}`}</h1>
                    <h1>{`Runtime ${result.runtime}`}</h1>
                    <img className="PlusButton" src={Plus} alt="add" />
                  </div>
                  <p className="MovieDescription">
                    Summary... From Lucasfilm comes the first of the Star Wars
                    standalone films, “Rogue One: A Star Wars Story,” an all-new
                    epic adventure. In a time of conflict, a group of unlikely
                    heroes band together on a mission to steal the plans to the
                    Death Star, the Empire’s ultimate weapon of
                    destruction.......
                  </p>
                </div>
              </div>
              <div className="SearchResultsLine" />
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBar;
