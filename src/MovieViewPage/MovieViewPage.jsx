import React, { Component } from 'react';
import './MovieViewPage.scss';
import MoviePoster from "./../images/BigMoviePoster.png"

class MovieViewPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
          Movie: 'Star Wars',
          MoviePosterUrl: MoviePoster,
          MovieDuration: "120 min",
          MovieReleaseYear: "(2009)",
          MovieGenres: new Array(12).fill("Action"),
          MovieDescription: "Summary... From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure.",
          CurrentTab: "CastAndCrew",
      };
    }

    render(){
        return(
            <div className="MovieViewPage">
                <div className="MovieViewModal">
                    <div className="ModalContentWrapper">
                        <div className="ColumnsContentWrapper">
                            <div className="LeftColumnWrapper">
                                <img 
                                    src={this.state.MoviePosterUrl} 
                                    style={{border: "thin solid #ee6055", height: 180}}
                                />
                            </div>
                            <div className="RightContentWrapper"> 
                                <div className="HeadingWrapper"> 
                                    <h1 className="MovieTitle">{this.state.Movie}</h1>   
                                    <h4 className="SecondaryHeadings">{this.state.MovieReleaseYear}</h4>
                                    <h4 className="SecondaryHeadings" >{this.state.MovieDuration}</h4>
                                </div>
                                <div className="GenreSection">
                                    <div className="GenreContentWrapper">
                                        <h1 className="GenreTitle">{"Genre"}</h1>
                                        <div className="GenreCategoriesWrapper">
                                            {this.state.MovieGenres.map(Genre => (
                                                <h2 className="GenreCategories">
                                                    {"Action"}
                                                </h2>
                                            ))}   
                                        </div>
                                    </div>
                                </div>
                                <p className="MovieDescriptionText">{this.state.MovieDescription}</p>
                            </div>
                        </div>
                        <div className="TabsSection"> 
                            <div className="TabContentWrapper">
                                <div className="TabHeadingsWrapper">
                                    <h1 className="TabHeadings">
                                        {"Cast and Crew"}
                                    </h1>
                                    <h1 className="TabHeadings">
                                        {"Critiques"}
                                    </h1>
                                    <h1 className="TabHeadings">
                                        {"Recommendations"}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieViewPage;