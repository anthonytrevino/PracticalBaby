import React, { Component } from 'react';
import '../CarSeatQuestions/Carseatquestions.css';
import {connect} from 'react-redux';

// export const Asdf = (props) => (
//   <div>
//     {props.isBrandSelected}
//     {props.children}
//   </div>
// )

class CarSeatQuestions extends Component {

  // let CSQuestions = [CSQuestion1, CSQuestion2, CSQuestion3]
  // CSQuestion1


  render(){

    return(
      <div>
        <form method="POST">
        <h1>Brand Preference</h1>
        <div>
        <ul className="prefselection">
          <li><input type="radio" name="rad" value="Graco" onClick ={this.props.graco}/>Graco</li>
          <li><input type="radio" name="rad" value="Evenflo" onClick ={this.props.evenflo}/>Evenflo</li>
          <li><input type="radio" name="rad" value="Cosco" onClick ={this.props.cosco}/>Cosco</li>
          <li><input type="radio" name="rad" value="Chicco" onClick ={this.props.chicco}/>Chicco</li>
          <li><input type="radio" name="rad" value="nopreferencebrand" onClick ={this.props.nopref}/>No preference</li>
        </ul>
        </div>
        <div>
        <h1>Color Preference</h1>
        <ul className="prefselection" value="">
          <li><input type="radio" name="rad1" value="Red" onClick ={this.props.red}/>Red</li>
          <li><input type="radio" name="rad1" value="Blue" onClick ={this.props.blue}/>Blue</li>
          <li><input type="radio" name="rad1" value="Pink" onClick ={this.props.pink}/>Pink</li>
          <li><input type="radio" name="rad1" value="Black" onClick ={this.props.black}/>Black</li>
          <li><input type="radio" name="rad1" value="nopreferencecolor" onClick ={this.props.noprefcolor}/>No preference</li>
        </ul>
        </div>
        <div>
        <h1>Car Seat Type</h1>
        <ul className="prefselection">
          <li><input type="radio" name="rad2" value="Convertible" onClick ={this.props.convertible}/>Convertible(Infant+Child)</li>
          <li><input type="radio" name="rad2" value="Infant" onClick ={this.props.infant}/>Infant</li>
          <li><input type="radio" name="rad2" value="Child" onClick ={this.props.child}/>Child</li>
          <li><input type="radio" name="rad2" value="3in1" onClick ={this.props.threein1}/>3 in 1</li>
          <li><input type="radio" name="rad2" value="nopreferencecarseat" onClick ={this.props.noprefcarseat}/>No preference</li>
        </ul>
        </div>
        <div>
        <h1>Max Child Weight</h1>
        <ul className="prefselection">
          <li><input type="radio" name="rad3" value="0-19" onClick ={this.props.zeroto19}/>19 pounds or less</li>
          <li><input type="radio" name="rad3" value="20-29" onClick ={this.props.twentyto29}/>20 to 29 pounds</li>
          <li><input type="radio" name="rad3" value="30-39" onClick ={this.props.thirtyto39}/>30 to 39 pounds</li>
          <li><input type="radio" name="rad3" value="30to49" onClick ={this.props.fortyto49}/>40 to 49 pounds</li>
          <li><input type="radio" name="rad3" value="nopreferencechildweight" onClick ={this.props.noprefchildweight}/>No preference</li>
        </ul>
        </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {


    isBrandSelected: state.isBrandSelected,
    brandSelected: state.brandSelected,
    isColorSelected : state.isColorSelected,
    colorSelected: state.colorSelected,
    isCarSeatTypeSelected : state.isCarSeatTypeSelected,
    carSeatType : state.carSeatType,
    isMaxChildWeightSelected : state.isMaxchildWeightSelected,
    maxChildWeight: state.maxChildWeight

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    graco: () => dispatch({type:"graco", isBrandSelected: true, brandSelected: 'Graco'}),
    evenflo: () => dispatch({type:"evenflo", isBrandSelected: true, brandSelected: 'Evenflo'}),
    cosco: () => dispatch({type:"cosco", isBrandSelected: true, brandSelected: 'Cosco'}),
    chicco: () => dispatch({type:"chicco", isBrandSelected: true, brandSelected: 'Chicco'}),
    nopref: () => dispatch({type:"nopreferencebrand", isBrandSelected: true, brandSelected: null}),

    red : () => dispatch({type:"red", isColorSelected: true, colorSelected: 'Red'}),
    blue : () => dispatch({type:"blue", isColorSelected: true, colorSelected: 'Red'}),
    pink : () => dispatch({type:"pink", isColorSelected: true, colorSelected: 'Red'}),
    black : () => dispatch({type:"black", isColorSelected: true, colorSelected: 'Red'}),
    noprefcolor: () => dispatch({type:"nopreferencecolor", isColorSelected: true, colorSelected: null}),

    convertible: () => dispatch({type:"convertible", isCarSeatTypeSelected: true, carSeatType: 'convertible'}),
    infant: () => dispatch({type:"infant", isCarSeatTypeSelected: true, carSeatType: 'infant'}),
    child: () => dispatch({type:"child", isCarSeatTypeSelected: true, carSeatType: 'child'}),
    threein1: () => dispatch({type:"3in1", isCarSeatTypeSelected: true, carSeatType: '3 in 1'}),
    noprefcarseat: () => dispatch({type:"nopreferencecarseat", isCarSeatTypeSelected: true, carSeatType: null}),

    zeroto19: () => dispatch({type:"0-19", isMaxChildWeightSelected: true, maxChildWeight: 19}),
    twentyto29: () => dispatch({type:"20-29", isMaxChildWeightSelected: true, maxChildWeight: 29}),
    thirtyto39: () => dispatch({type:"30-39", isMaxChildWeightSelected: true, maxChildWeight: 39}),
    fortyto49: () => dispatch({type:"40-49", isMaxChildWeightSelected: true, maxChildWeight: 49}),
    noprefchildweight: () => dispatch({type:"nopreferencechildweight", isMaxChildWeightSelected: true, maxChildWeight: null})


  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CarSeatQuestions);
