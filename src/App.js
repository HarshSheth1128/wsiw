import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage/LoginPage';
import MovieViewPage from './MovieViewPage/MovieViewPage';
import SideBar from './common/SideBar';
import SearchBar from './common/SearchBar';
import MainPage from './MainPage/MainPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMovieOpen: true,
      isSidebarOpen: true,
      isLogin: false,
    };
  }

  closeSideBar = () => {
    this.setState(prevState => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  render() {
    return (
      <div className="App">
        <Router>
          {!this.state.isLogin && <Redirect to="/login" />}
          <Route
            exact
            path="/login"
            component={props => <LoginPage {...props} />}
          />
          <Route exact path="/" component={MainPage} />
        </Router>
        {/* <SearchBar /> */}
        {/* <SideBar
          closeSideBar={this.closeSideBar}
          isOpen={this.state.isSidebarOpen}
        />
        <MovieViewPage
          isOpen={this.state.isMovieOpen}
        />
        <LoginPage isLogin={this.state.isLogin} /> */}
      </div>
    );
  }
}

export default App;
