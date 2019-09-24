import React, { Component } from 'react';
import Puppy from '../assets/puppy.jpg';
import Monkey from '../assets/monkey.jpeg';
import Natalie from '../assets/natalie-portman.jpg';
import Robert from '../assets/rdj.jpg';
import GOAT from '../assets/mahomes.jpg';
import Firetruck from '../assets/firetruck.jpg';
import './Sidebar.scss';
import ChevronLeft from '../assets/chevronLeft.svg';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'nyanman28',
      profilePicUrl: Puppy,
      friends: [
        {
          username: 'anjali.notaney',
          profilePicUrl: Puppy,
        },
        {
          username: 'monkey539',
          profilePicUrl: Monkey,
        },
        {
          username: 'natalie.portman',
          profilePicUrl: Natalie,
        },
        {
          username: 'robert the great',
          profilePicUrl: Robert,
        },
        {
          username: 'GOAT',
          profilePicUrl: GOAT,
        },
        {
          username: 'weoooooo',
          profilePicUrl: Firetruck,
        },
      ],
    };
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
        <div className="Profile">
          <img
            className="ProfilePic"
            src={this.state.profilePicUrl}
            alt="Profile image"
          />
          <h1 className="ProfileUsername">{this.state.username}</h1>
        </div>
        <div className="SideBarLine" />
        {this.state.friends.map(friend => (
          <div className="Profile">
            <img
              className="ProfilePic"
              src={friend.profilePicUrl}
              alt="Profile image"
            />
            <h1 className="ProfileUsername">{friend.username}</h1>
          </div>
        ))}
        <div className="Profile">
          <div className="PlusButton">
            <span className="PlusText">+</span>
          </div>
          <h1 className="ProfileUsername">Add Friend</h1>
        </div>
      </div>
    );
  }
}

export default SideBar;
