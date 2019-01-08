import React, { Component } from 'react';
import './NavBar.css';
import logo from './Logo.png';
import practical from './Practical.png'
// import Register from './Register/Register';
// import './styles.css';
import Person from '../Person/Person';

class NavBar extends Component {

  render() {
    return (
      <div className="navbar">
        <ul id="menu">
          <li className='Home'>Home</li>
          <li className='Logo'><img src={practical} alt="" /></li>
          <li className='Login'>Login</li>
          <li className='Register'>Register</li>
          <Person />
        </ul>
      </div>
    )
  }
}

export default NavBar;
