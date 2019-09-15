import React, { Component } from 'react';
import './MovieViewPage.scss';
import MoviePoster from '../assets/BigMoviePoster.png';
import UnlikeIcon from '../assets/Unlike.svg';
import LikesIcon from '../assets/Likes.svg';
import ViewsIcon from '../assets/Views.svg';
import CloseIcon from '../assets/close.svg';

class MovieViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*MoviePosition: {ListNumber: this.props.ListNumber, MovieIndex: this.props.MovieIndex}
      Movie: 'Star Wars',
      MoviePosterUrl: MoviePoster,
      MovieDuration: '120 min',
      MovieReleaseYear: '(2009)',
      MovieGenres: new Array(12).fill({
        type: 'Action',
      }),
      MovieDescription:
        'Summary... From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure.',
      */
      CurrentTab: 'CastAndCrew',
      ActiveTab: 'tab1',
      Views: 100,
      Likes: 120,
      ViewsIconUrl: ViewsIcon,
      LikesIconUrl: LikesIcon,
      UnlikeIconUrl: UnlikeIcon,
      hasLiked: false,
    };
  }

  handleChange = (property, value) => {
    this.setState({ [property]: value });
  };

  render() {
    let MovieViewClass = '';
    let MovieContent = '';
    let MovieViewWrapper = '';
    if (this.props.isOpen) {
      MovieViewClass = 'MovieViewModal';
      MovieContent = 'ModalContentWrapper';
      MovieViewWrapper = 'MovieViewWrapper';
    } else {
      MovieViewClass = 'MovieViewModalClosed';
      MovieContent = 'MovieViewModalClosed';
      MovieViewWrapper = 'MovieViewModalClosed';
    }

    return (
      <>
      <div className={MovieViewWrapper}>
        <div className={MovieViewClass}>
          <div className={MovieContent}>
            <div className="ColumnsContentWrapper">
              <div className="LeftColumnWrapper">
                <img src={this.props.movie.MoviePosterUrl} className="MovieViewPagePoster" />
                <div className="IconsWrapper">
                  {this.state.hasLiked && (
                    <img
                      onClick={() =>
                        this.setState(prevState => ({
                          Likes: prevState.Likes - 1,
                          hasLiked: !prevState.hasLiked,
                        }))
                      }
                      src={this.state.LikesIconUrl}
                      className="LikesIcon"
                    />
                  )}
                  {!this.state.hasLiked && (
                    <img
                      onClick={() =>
                        this.setState(prevState => ({
                          Likes: prevState.Likes + 1,
                          hasLiked: !prevState.hasLiked,
                        }))
                      }
                      src={this.state.UnlikeIconUrl}
                      className="LikesIcon"
                    />
                  )}
                  <h3 className="IconsText">{this.state.Likes}</h3>
                  <img src={this.state.ViewsIconUrl} className="ViewsIcon" />
                  <h3 className="IconsText">{this.state.Views}</h3>
                </div>
              </div>
              <div className="RightContentWrapper">
                <div className="HeadingWrapper">
                  <div className="MovieAndYearWrapper">
                  <h1 className="MovieTitle">{this.props.movie.Movie}</h1>
                  <h4 className="SecondaryHeadings">
                    {this.props.movie.MovieReleaseYear}
                  </h4>
                  </div>
                  <h4 className="SecondaryHeadings">
                    {`duration: ${this.props.movie.MovieDuration}`}
                  </h4>
                  <img
                      //onClick={() =>
                        //this.setState(() => ({
                          //isMovieViewOpen: false,
                        //}))
                      //}
                      onClick = {this.props.closeView}
                      src={CloseIcon}
                      className="closeIcon"
                  />
                </div>
                <div className="GenreSection">
                  <div className="GenreContentWrapper">
                    <h1 className="GenreTitle">{'Genre'}</h1>
                    <div className="GenreCategoriesWrapper">
                      {this.props.movie.MovieGenres.map((Genre, i) => (
                        <h2 key={i} className="GenreCategories">
                          {Genre.type}
                        </h2>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="MovieDescriptionText">
                  {this.props.movie.MovieDescription}
                </p>
              </div>
            </div>
            <div className="RowContentWrapper">
              <div>
                <p className="MovieDescriptionText2">
                  {this.props.movie.MovieDescription}
                </p>
              </div>
              <div className="TabsSection">
                <div className="TabContentWrapper">
                  <div className="TabHeadingsWrapper">
                    <h3
                      onClick={() =>
                        this.setState(() => ({
                          ActiveTab: 'tab1',
                        }))
                      }
                      className="TabHeadings"
                    >
                      {'Cast and Crew'}
                    </h3>
                    <h3
                      onClick={() =>
                        this.setState(() => ({
                          ActiveTab: 'tab2',
                        }))
                      }
                      className="TabHeadings"
                    >
                      {'Critiques'}
                    </h3>
                    <h3
                      onClick={() =>
                        this.setState(() => ({
                          ActiveTab: 'tab3',
                        }))
                      }
                      className="TabHeadings"
                    >
                      {'Recommendations'}
                    </h3>
                  </div>
                  <div className="TabBarLine" />
                  {this.state.ActiveTab === 'tab1' && (
                    <p>
                      {
                        ' ........................This is tab 1 info'
                      }
                    </p>
                  )}
                  {this.state.ActiveTab === 'tab2' && (
                    <p>{'........................This is tab 2 info'}</p>
                  )}
                  {this.state.ActiveTab === 'tab3' && (
                    <p>{'........................This is tab 3 info'}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default MovieViewPage;
