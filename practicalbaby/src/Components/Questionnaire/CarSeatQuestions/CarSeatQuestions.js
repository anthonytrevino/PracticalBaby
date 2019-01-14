import React, { Component } from 'react';
import '../CarSeatQuestions/Carseatquestions.css';

class CarSeatQuestions extends Component {

  // let CSQuestions = [CSQuestion1, CSQuestion2, CSQuestion3]
  //


  render(){

    return(
      <div>
        <h1>Brand Preference</h1>
        <ul className="prefselection">
          <li><input type="radio" value="Graco"/>Graco</li>
          <li><input type="radio" value="Evenflo"/>Evenflo</li>
          <li><input type="radio" value="Cosco"/>Cosco</li>
          <li><input type="radio" value="Chicco"/>Chicco</li>
          <li><input type="radio" value="nopreference"/>No preference</li>
        </ul>

        <h1>Color Preference</h1>
        <ul className="prefselection" value="">
          <li><input type="radio" value="Red"/>Red</li>
          <li><input type="radio" value="Blue"/>Blue</li>
          <li><input type="radio" value="Pink"/>Pink</li>
          <li><input type="radio" value="Black"/>Black</li>
          <li><input type="radio" value="nopreference"/>No preference</li>
        </ul>

        <h1>Car Seat Type</h1>
        <ul className="prefselection">
          <li><input type="radio" value="Convertible"/>Convertible(Infant+Child)</li>
          <li><input type="radio" value="Infant"/>Infant</li>
          <li><input type="radio" value="Child"/>Child</li>
          <li><input type="radio" value="3in1"/>3 in 1</li>
          <li><input type="radio" value="nopreference"/>No preference</li>
        </ul>

        <h1>Max Child Weight</h1>
        <ul className="prefselection">
          <li><input type="radio" value="0-19"/>19 pounds or less</li>
          <li><input type="radio" value="20-29"/>20 to 29 pounds</li>
          <li><input type="radio" value="30-39"/>30 to 39 pounds</li>
          <li><input type="radio" value="30to49"/>40 to 49 pounds</li>
          <li><input type="radio" value="nopreference"/>No preference</li>
        </ul>

      </div>
    )
  }
}

export default CarSeatQuestions;
