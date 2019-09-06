import React, { Component } from 'react';
import './MovieViewPage.scss';
import MoviePoster from "./../images/BigMoviePoster.png"

class MovieViewPage extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render(){
        return(
            <div className="MovieViewPage">
                <div className="MovieViewModal">
                    <div className="ModalContentWrapper">
                    <div className="ColumnsContentWrapper">
                        <div className="LeftColumnWrapper">
                        <img src={MoviePoster} style={{border: "thin solid #ee6055", height: 180}}/>
                        </div>
                        <div className="RightContentWrapper"> 
                            <div className="HeadingWrapper"> 
                                <h1 className="MovieTitle">
                                    {"Star Wars"}
                                </h1>   
                                <h4 className="SecondaryHeadings" >
                                {"(2009)"}
                                </h4>
                                <h4 className="SecondaryHeadings" >
                                {"duration: 120min"}
                                </h4>
                            </div>
                            <div className="GenreSection">
                                <div className="GenreContentWrapper">
                                    <div className="GenreContentWrapper">
                                        <div className="GenreContentWrapper">
                                            <h1 className="GenreTitle">
                                                {"Genre"}
                                            </h1>
                                            <div className="GenreCategoriesWrapper">
                                                <h2 className="GenreCategories">
                                                    {"Action"}
                                                </h2>
                                                <h2 className="GenreCategories">
                                                    {"Action"}
                                                </h2>
                                                <h2 className="GenreCategories">
                                                    {"Action"}
                                                </h2>
                                                <h2 className="GenreCategories">
                                                    {"Action"}
                                                </h2>
                                                <h2 className="GenreCategories">
                                                    {"Action"}
                                                </h2>
                                                <h2 className="GenreCategories">
                                                    {"Action"}
                                                </h2>
                                                <h2 className="GenreCategories">
                                                    {"Action"}
                                                </h2>
                                                <h2 className="GenreCategories">
                                                    {"Action"}
                                                </h2>
                                                <h2 className="GenreCategories">
                                                    {"Action"}
                                                </h2>
                                                <h2 className="GenreCategories">
                                                    {"Action"}
                                                </h2>
                                                <h2 className="GenreCategories">
                                                    {"Action"}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="MovieDescriptionText">
                                {"Summary...  From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure."}
                            </p>
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