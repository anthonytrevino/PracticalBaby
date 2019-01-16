import React, { Component } from 'react';
import '../HomePage/HomePage.css';
import Quote from '../Quote/Quote';

import AboutUs from '../AboutUs/AboutUs';
// import Testimonials from '../Testimonials';

// import AboutUs from './AboutUs';
import Testimonial from '../Testimonial/Testimonial';
import About from '../About/About.js';


// import SignIn from '../SignIn/SignIn.js';
// import SignIn from '../LogIn/LogIn';

class HomePage extends Component {
  render() {
    return (
      <div>
        <About />
        <hr id="hr1" />
        <Quote />

        <AboutUs />



        {/* <Testimonials /> */}

        <hr id="hr2"/>
        <Testimonial />

      </div>
    )
  }

}

export default HomePage;
