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
            MovieDescription: 'Summary... From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure.',
          }),
        },
        {
          title: 'TV shows about badass characters',
          movies: new Array(12).fill({
            posterUrl: BreakingBad,
            Movie: 'Breaking Bad',
            MoviePosterUrl: BreakingBad,
            MovieDuration: '49 min',
            MovieReleaseYear: '(2008–2013)',
            MovieGenres: new Array(12).fill({
              type: 'Thriller',
              Views: 90,
              Likes: 98,
              hasLiked: true,
            }),
            MovieDescription: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
          }),
        },
        {
          title: 'Movies that changed my perspective on life',
          movies: new Array(4).fill({
            posterUrl: Moonlight,
            Movie: 'Moonlight',
            MoviePosterUrl: Moonlight,
            MovieDuration: '101 min',
            MovieReleaseYear: '(2016)',
            MovieGenres: new Array(12).fill({
              type: 'Drama',
              Views: 290,
              Likes: 198,
              hasLiked: true,
            }),
            MovieDescription: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
          }),
        },
        {
          title: 'Best superhero movies',
          movies: new Array(13).fill({
            posterUrl: BlackPanther,
            Movie: 'BlackPanther',
            MoviePosterUrl: BlackPanther,
            MovieDuration: '134 min',
            MovieReleaseYear: '(2018)',
            MovieGenres: new Array(12).fill({
              type: 'Sci-Fi',
              Views: 290,
              Likes: 198,
              hasLiked: true,
            }),
            MovieDescription: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
          }),
        },
      ],
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
  
  render() {
    return (
      <>
        {this.state.isMovieOpen && (
          /*
          <div className="MovieViewWrapper">
            <MovieViewPage
              closeMovieView={this.closeMovieView}
              isOpen={this.state.isMovieOpen}
              movie={this.state.movieLists[this.state.MovieListNumber].movies[this.state.MovieIndex]}
            />
          </div>
          */
          <MovieViewPage isOpen={this.state.isMovieOpen} 
            closeMovieView={this.closeMovieView} 
            movie={this.state.movieLists[this.state.MovieListNumber].movies[this.state.MovieIndex]}
          />
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
                    {list.movies.map((movie, j) => (
                      <img
                        src={movie.posterUrl}
                        className="MoviePoster"
                        onClick={() => this.setState({ isMovieOpen: true, MovieListNumber: i, MovieIndex: j})}
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
