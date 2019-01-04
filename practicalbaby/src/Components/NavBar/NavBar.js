import React, { Component } from 'react';
import './NavBar.css';
// import Register from './Register/Register';
// import './styles.css';

class NavBar extends Component {

  render() {
    return (
      <div className="navbar">
        <ul id="menu">
          <li>Practical Baby</li>
          <li>Logo</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
