import React, { Component } from 'react';
import './App.css';
import LoginPage from './LoginPage/LoginPage';
import SideBar from './common/SideBar';
import SearchBar from './common/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true,
      isLogin: true,
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
        <SearchBar />
        {/* <SideBar
          closeSideBar={this.closeSideBar}
          isOpen={this.state.isSidebarOpen}
        />
        <LoginPage isLogin={this.state.isLogin} /> */}
      </div>
    );
  }
}

export default App;
