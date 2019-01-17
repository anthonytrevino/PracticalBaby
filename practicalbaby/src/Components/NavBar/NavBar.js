import React, { Component } from 'react';
import './NavBar.css';
// import practical from './Practical.png';
import { Link } from 'react-router-dom';



class NavBar extends Component {

  render() {
    return (

      <div>
        {/* MainMenu-Area */}
        <nav className="mainmenu-area" data-spy="affix" data-offset-top="200">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#primary_menu">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand logo" ><img src="images/logo.png" alt="Logo" /></Link>
            </div>
            <div className="collapse navbar-collapse" id="primary_menu">
              <ul className="nav navbar-nav mainmenu">
                <li className="active"><Link to="/">Home</Link></li>
                <li><a href="#about_us">About Us</a></li>
              </ul>
              <div className="right-button hidden-xs visible">
                <Link to="/register">Sign Up</Link>
                <Link to="/login">Log In</Link>
              </div>



            </div>
          </div>
        </nav>
        {/* MainMenu-Area-End  */}
      </div>

    )
  }
}

export default NavBar;
