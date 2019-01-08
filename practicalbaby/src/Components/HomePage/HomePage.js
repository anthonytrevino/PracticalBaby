import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Quote from '../Quote/Quote';
// import AboutUs from './AboutUs';
// import Testimonials from './Testimonials';
// import SignIn from '../SignIn/SignIn.js';
import Register from '../Register/Register.js';
import LogIn from '../LogIn/LogIn.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Quote />
        <Register />
        {
          this.props.route === 'signin' ? <LogIn /> : null
        }
        {/* <LogIn /> */}
        {/* <AboutUs /> */}
        {/* <Testimonials /> */}
      </div>
    )
  }

}

export default HomePage;
