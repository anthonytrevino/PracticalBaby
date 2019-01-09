import React, {Component} from 'react'
import '../Testimonial/Testimonial.css';
class Testimonial extends Component {

  render() {
    return (
      <div class="testimonials">
        <h1>Testimonials go here</h1>
        <ul id="testimonialsul">
          <li className="testimonial"><h1>Review #1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae. Odio pellentesque diam volutpat commodo. </p></li>
          <li className="testimonial"><h1>Review #2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae. Odio pellentesque diam volutpat commodo.</p></li>
          <li className="testimonial"><h1>Review #3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae. Odio pellentesque diam volutpat commodo.</p></li>
        </ul>
      </div>
    )
  }
}

export default Testimonial;
