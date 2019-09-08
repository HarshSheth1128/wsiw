import React, { Component } from 'react';
import './App.css';
import LoginPage from './LoginPage/LoginPage';
import MovieViewPage from './MovieViewPage/MovieViewPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      isMovieOpen: true,
    };
  }
  render() {
    return (
      <div className="App">
        {
        <MovieViewPage
          isOpen={this.state.isMovieOpen}
        />
        }
        {/*<LoginPage isLogin={this.state.isLogin} />*/}
      </div>
    );
  }
}

export default App;
