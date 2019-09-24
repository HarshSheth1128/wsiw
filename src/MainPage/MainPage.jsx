import React, { Component } from 'react';
import './MainPage.scss';
import MoviePoster from '../assets/poster.jpg';
import BreakingBad from '../assets/breakingbad.jpg';
import Moonlight from '../assets/moonlight.jpg';
import BlackPanther from '../assets/blackPanther.jpg';
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
      isSideBarOpen: false,
      movieLists: [
        {
          title: 'Favourite Star Wars Movies',
          movies: new Array(10).fill({
            posterUrl: MoviePoster,
          }),
        },
        {
          title: 'TV shows about badass characters',
          movies: new Array(12).fill({
            posterUrl: BreakingBad,
          }),
        },
        {
          title: 'Movies that changed my perspective on life',
          movies: new Array(4).fill({
            posterUrl: Moonlight,
          }),
        },
        {
          title: 'Best superhero movies',
          movies: new Array(13).fill({
            posterUrl: BlackPanther,
          }),
        },
      ],
      isMovieOpen: false,
    };
  }

  closeSideBar = () => {
    this.setState({ isSideBarOpen: false });
  };

  openSideBar = () => {
    this.setState({ isSideBarOpen: true });
  };

  closeMovieView = () => {
    this.setState({ isMovieOpen: false });
  };

  render() {
    return (
      <>
        {this.state.isMovieOpen && (
          <div className="MovieViewWrapper">
            <MovieViewPage
              closeMovieView={this.closeMovieView}
              isOpen={this.state.isMovieOpen}
            />
          </div>
        )}
        <SideBar
          closeSideBar={this.closeSideBar}
          isOpen={this.state.isSideBarOpen}
        />

        <div className="MainPage">
          <div className="BackWidgetsContainer">
            <img
              src={ChevronRight}
              onClick={this.openSideBar}
              className="ChevronSideBar"
            />
            <img src={Settings} className="Settings" />
          </div>
          <div className="TopWidgetsContainer">
            <SearchBar />
          </div>
          <div className="MainPageContentWrapper">
            <div className="ListContainer">
              {this.state.movieLists.map((list, i) => (
                <div className="ListContentWrapper">
                  <div className="ListTitleContainer">
                    <h1 key={i} className="ListTitle">
                      {list.title}
                    </h1>
                    <h1 key={i} className="ListTitle Share">
                      Share =>
                    </h1>
                  </div>
                  <div className="MovieListWrapper">
                    {list.movies.map(movie => (
                      <img
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
