import React, { Component } from 'react';
import './SearchBar.scss';
import Search from '../assets/search.svg';
import StarWars from '../assets/poster.jpg';
import BlackPanther from '../assets/blackPanther.jpg';
import Moonlight from '../assets/moonlight.jpg';
import RougeOne from '../assets/MoviePoster.jpg';
import BreakingBad from '../assets/breakingbad.jpg';
import Plus from '../assets/plus.svg';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          moviePoster: StarWars,
          title: 'Star Wars',
          year: '(2019)',
          runtime: '120 min',
          description: `Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.`,
        },
        {
          moviePoster: BlackPanther,
          title: 'Black Panther',
          year: '(2019)',
          runtime: '103 min',
          description: `T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.`,
        },
        {
          moviePoster: Moonlight,
          title: 'Moonlight',
          year: '(2019)',
          runtime: '113 min',
          description: `A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.`,
        },
        {
          moviePoster: RougeOne,
          title: 'Star Wars: Rouge One',
          year: '(2019)',
          runtime: '145 min',
          description: `The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.`,
        },
        {
          moviePoster: BreakingBad,
          title: 'Breaking Bad',
          year: '(2019)',
          runtime: '60 min per episode',
          description: `A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.`,
        },
      ],
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
                  <p className="MovieDescription">{result.description}</p>
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
