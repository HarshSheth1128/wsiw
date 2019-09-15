import React, { Component } from 'react';
import './MainPage.scss';
import MoviePoster from '../assets/poster.jpg';
import ChevronRight from '../assets/chevron.svg';
import SideBar from '../common/SideBar';
import ChevronLeft from '../assets/chevronLeft.svg';
import Settings from '../assets/Settings.svg';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';
import MovieViewPage from '../MovieViewPage/MovieViewPage';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayChevronRight: false,
      isSideBarOpen: false,
      movieLists: new Array(6).fill({
        title: 'Favourite Superhero Movies',
        movies: new Array(25).fill({
          posterUrl: MoviePoster,
        }),
      }),
      isMovieOpen: false,
    };
  }

  closeSideBar = () => {
    this.setState({ isSideBarOpen: false });
  };

  openSideBar = () => {
    this.setState({ isSideBarOpen: true });
  };

  render() {
    return (
      <>
        {this.state.isMovieOpen && (
          <div className="MovieViewWrapper">
            <MovieViewPage isOpen={this.state.isMovieOpen} />
          </div>
        )}
        <SideBar
          closeSideBar={this.closeSideBar}
          isOpen={this.state.isSideBarOpen}
        />

        <div className="TopWidgetsContainer">
          <SearchBar />
        </div>

        <div className="MainPage">
          <div className="BackWidgetsContainer">
            <img
              src={ChevronRight}
              onClick={this.openSideBar}
              className="ChevronSideBar"
            />
            <img src={Settings} className="Settings" />
          </div>
          <div className="MainPageContentWrapper">
            <div className="ListContainer">
              {this.state.movieLists.map((list, i) => (
                <div className="ListContentWrapper">
                  <div className="ListTitleContainer">
                    <h1 key={i} className="ListTitle">
                      {list.title}
                    </h1>
                  </div>
                  <div className="MovieListWrapper">
                    {list.movies.map((movie, j) => (
                      <img
                        // onClick={() => this.setState(prevState => ({Views: prevState.Views + 1}))}
                        src={movie.posterUrl}
                        className="MoviePoster"
                        onClick={() => this.setState({ isMovieOpen: true })}
                      />
                    ))}
                  </div>
                  <div className="MovieDividerLine" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
