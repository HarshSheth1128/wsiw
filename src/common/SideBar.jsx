import React, { Component } from 'react';
import './Sidebar.scss';
import ChevronLeft from '../assets/chevronLeft.svg';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let SidebarClass = '';
    if (this.props.isOpen) {
      SidebarClass = 'SideBar open';
    } else {
      SidebarClass = 'SideBar';
    }

    return (
      <div className={SidebarClass}>
        <div className="ButtonHolder">
          <img
            onClick={this.props.closeSideBar}
            className="chevron"
            src={ChevronLeft}
            alt="backButton"
          />
        </div>
      </div>
    );
  }
}

export default SideBar;
