import React, { Component } from 'react';
import './NavBar.css';
import practical from './Practical.png'
import { Link } from 'react-router-dom';
// import Register from './Register/Register';
// import './styles.css';

class NavBar extends Component {

  render() {
    return (
      <div className="navbar">
        <ul id="menu">
          <Link to="/">
            <li className='Home'>Home</li>
          </Link>
          <li className='Logo'><img src={practical} alt="" /></li>
          <Link to="/login">
            <li className='Login'>Login</li>
          </Link>
          <Link to="/register">
            <li className='Register'>Register</li>
          </Link>
          <Link to="/filteredresults">
            <li className='filteredresults'>Filtered Results</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default NavBar;
