import React, {Component} from 'react';
import NavBar from './NavBar';
import Qotd from './QuoteOfTheDay';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';


class HomePage extends Component{
  render(){
    return(
      <div>
        <NavBar/>
        <Qotd />
        <AboutUs />
        <Testimonials />
      </div>
    )
  }

}

export default HomePage;
