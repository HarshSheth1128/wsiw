import React, { Component } from 'react';
import './MainPage.scss';
import MoviePoster from './../assets/BigMoviePoster.png';

class MainPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movieLists: new Array(4).fill({
          title: 'Favourite Superhero Movies',
          movies: new Array(10),fill({
                posterUrl: MoviePoster, 
          })
        }),
      };
    }

    render() {
        
    
        //return ();
    }
}