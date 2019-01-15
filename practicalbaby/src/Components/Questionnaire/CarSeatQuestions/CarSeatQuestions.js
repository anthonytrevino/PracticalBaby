import React, { Component } from 'react';
import '../CarSeatQuestions/Carseatquestions.css';
import {connect} from 'react-redux';

export const Asdf = (props) => (
  <div>
    {props.isBrandSelected}
    {props.children}
  </div>
)

class CarSeatQuestions extends Component {

  // let CSQuestions = [CSQuestion1, CSQuestion2, CSQuestion3]
  //


  render(){

    return(
      <div>
        <h1>Brand Preference</h1>
        <ul className="prefselection">
          <li><input type="radio" value="Graco" onClick ={this.props.graco}/>Graco</li>
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


const mapDispatchToProps = (dispatch) => {
  return {
    graco: () => dispatch({type:"graco", isBrandSelected: true, brandSelected: 'Graco'}),
    evenflo: () => dispatch({type:"evenflo", isBrandSelected: true, brandSelected: 'Evenflo'}),
    Cosco: () => dispatch({type:"cosco", isBrandSelected: true, brandSelected: 'Cosco'}),
    Chicco: () => dispatch({type:"chicco", isBrandSelected: true, brandSelected: 'Chicco'}),

    red : () => dispatch({type:"red", isColorSelected: true, colorSelected: 'Red'}),
    blue : () => dispatch({type:"red", isColorSelected: true, colorSelected: 'Red'}),
    pink : () => dispatch({type:"red", isColorSelected: true, colorSelected: 'Red'}),
    black : () => dispatch({type:"red", isColorSelected: true, colorSelected: 'Red'}),
    nopref: () => dispatch({type:"nopreference", isColorSelected: true, colorSelected: null}),

    convertible: () => dispatch({type:"convertible", isCarSeatTypeSelected: true, carSeatType: 'convertible'}),
    infant: () => dispatch({type:"infant", isCarSeatTypeSelected: true, carSeatType: 'infant'}),
    child: () => dispatch({type:"child", isCarSeatTypeSelected: true, carSeatType: 'child'}),
    threein1: () => dispatch({type:"3in1", isCarSeatTypeSelected: true, carSeatType: '3 in 1'}),
    nopref2: () => dispatch({type:"nopreference", isCarSeatTypeSelected: true, carSeatType: null}),

    zeroto19: () => dispatch({type:"0-19", isMaxChildWeightSelected: true, maxChildWeight: 19}),
    twentyto29: () => dispatch({type:"20-29", isMaxChildWeightSelected: true, maxChildWeight: 29}),
    thirtyto39: () => dispatch({type:"30-39", isMaxChildWeightSelected: true, maxChildWeight: 39}),
    nopref3: () => dispatch({type:"nopreference", isMaxChildWeightSelected: true, maxChildWeight: null})


  }
}

export default connect(mapDispatchToProps)(CarSeatQuestions);
