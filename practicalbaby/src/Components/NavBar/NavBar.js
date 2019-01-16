import React, { Component } from 'react';
import './NavBar.css';
// import practical from './Practical.png';
import { Link } from 'react-router-dom';



class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: this.props.isSignedIn
    }
  }


  navBarView = () => {
    console.log("I am signed in: " + this.props.isSignedIn)
    let guides = document.getElementsByClassName('hidden')
    if (this.state.isSignedIn) {
      guides.classList.add('visible')
    }
  }


  componentDidMount() {
    this.navBarView()
  }

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
                <li><a href="#about_page">About Us</a></li>
                <li><Link to="/guides" className="visible">Guides</Link></li>
                <li><Link to="/search">Search</Link></li>
              </ul>
              <div className="right-button hidden-xs">
                <Link to="/register">Sign Up</Link>
                <Link to="/login">Log In</Link>
              </div>

            </div>
          </div>
        </nav>
        {/* MainMenu-Area-End  */}
=======
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
>>>>>>> 11aa3cc6ffeb9c69bcd264c33272c29b80f1b2b0
      </div>

    )
  }
}

export default NavBar;
