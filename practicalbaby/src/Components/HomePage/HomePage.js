import React, { Component } from 'react';
import '../HomePage/HomePage.css';
import Quote from '../Quote/Quote';




import AboutUs from '../AboutUs/AboutUs';

import Testimonial from '../Testimonial/Testimonial';


// import SignIn from '../SignIn/SignIn.js';
// import SignIn from '../LogIn/LogIn';

class HomePage extends Component {
  render() {
    return (
      <div>
        <hr id="hr1" />
        <Quote />


        <AboutUs />



        {/* <Testimonials /> */}


        <hr id="hr2"/>
        <Testimonial />


        <hr id="hr2" />
        <Testimonial />

      </div>
    )
  }

}

export default HomePage;
