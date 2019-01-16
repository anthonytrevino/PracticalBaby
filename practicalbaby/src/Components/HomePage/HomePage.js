import React, { Component } from 'react';
import Quote from '../Quote/Quote';
import AboutUs from '../AboutUs/AboutUs';
// import Testimonials from '../Testimonials';
// import SignIn from '../SignIn/SignIn.js';
// import SignIn from '../LogIn/LogIn';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Quote />
        <AboutUs />



        {/* <Testimonials /> */}
      </div>
    )
  }

}

export default HomePage;
