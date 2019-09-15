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
          Movie: 'Star Wars',
          MoviePosterUrl: MoviePoster,
          MovieDuration: '120 min',
          MovieReleaseYear: '(2009)',
          MovieGenres: new Array(12).fill({
          type: 'Action',
          Views: 100,
          Likes: 120,
          hasLiked: true,
      }),
      MovieDescription:
        'Summary... From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure.',
        }),
      }),
      MovieListNumber: 0,
      MovieIndex: 0,
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
/*
  UpdateMovieLikes = (MoviePosition) => {
    ///this.setState({ movieLists[MoviePosition.ListNumber].movies[MoviePosition.MovieIndex] : 12});
    this.setState(prevState => ({
      [prevState.movieLists[MoviePosition.ListNumber].movies[MoviePosition.MovieIndex].Likes] : 5,
      [prevState.movieLists[MoviePosition.ListNumber].movies[MoviePosition.MovieIndex].hasLiked] : true,
    }))
  };
*/
  render() {
    return (
      <>
        {this.state.isMovieOpen && (
          <MovieViewPage isOpen={this.state.isMovieOpen} 
            closeView={this.closeMovieView} 
            movie={this.state.movieLists[this.state.MovieListNumber].movies[this.state.MovieIndex]}
            //ListNumber={this.state.MovieListNumber}
            //MovieIndex={this.state.MovieIndex}
            //updateLikes={this.UpdateMovieLikes}
          />
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
                        onClick={() => this.setState({ isMovieOpen: true, MovieListNumber: i, MovieIndex: j, })}
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
