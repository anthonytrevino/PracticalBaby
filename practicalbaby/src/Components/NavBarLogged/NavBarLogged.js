import React, { Component } from 'react';
import '../NavBar/NavBar.css';

// import practical from './Practical.png';
import { Link } from 'react-router-dom';



class NavBarLogged extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user,
            isSignedIn: this.props.isSignedIn

        }
    }

    navClose() {

        this.setState({
            isSignedIn: false
        });

    }

    render() {
        const user = this.props.user
        console.log(this.props.user)
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
                                <li><Link to="/questionnaire" className="visible">Questionnarie</Link></li>
                                <li><Link to="/guide">Guides</Link></li>
                            </ul>
                            <div className="right-button hidden-xs visible">
                                Hello,<Link to="/userprofile">{user.firstName}</Link>
                                <Link to="/" onClick={this.navClose}>Log Out</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* MainMenu-Area-End  */}
            </div >

        )
    }
}

export default NavBarLogged;
