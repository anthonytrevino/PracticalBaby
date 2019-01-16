import React, { Component } from 'react';
import '../HomePage/HomePage.css';
import Quote from '../Quote/Quote';
<<<<<<< HEAD
import AboutUs from '../AboutUs/AboutUs';
// import Testimonials from '../Testimonials';
=======
// import AboutUs from './AboutUs';
import Testimonial from '../Testimonial/Testimonial';
import About from '../About/About.js';

>>>>>>> 11aa3cc6ffeb9c69bcd264c33272c29b80f1b2b0
// import SignIn from '../SignIn/SignIn.js';
// import SignIn from '../LogIn/LogIn';

class HomePage extends Component {
  render() {
    return (
      <div>
        <About />
        <hr id="hr1" />
        <Quote />
<<<<<<< HEAD
        <AboutUs />



        {/* <Testimonials /> */}
=======
        <hr id="hr2"/>
        <Testimonial />
>>>>>>> 11aa3cc6ffeb9c69bcd264c33272c29b80f1b2b0
      </div>
    )
  }

}

export default HomePage;
