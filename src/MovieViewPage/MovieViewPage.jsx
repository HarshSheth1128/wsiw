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
                    <div className="LeftColumnWrapper">
                    <img src={MoviePoster} style={{border: "thin solid #fc0606", height: 180}}/>
                    </div>
                    <div className="RightContentWrapper">
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieViewPage;