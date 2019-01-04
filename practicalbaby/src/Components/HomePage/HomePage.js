import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Quote from '../Quote/Quote';
// import AboutUs from './AboutUs';
// import Testimonials from './Testimonials';


class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Quote />
        {/* <AboutUs /> */}
        {/* <Testimonials /> */}
      </div>
    )
  }

}

export default HomePage;
