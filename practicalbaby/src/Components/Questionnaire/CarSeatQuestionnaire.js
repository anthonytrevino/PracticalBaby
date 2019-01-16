import React, {Component} from 'react';
import {connect} from 'react-redux';


class CarSeatQuestionnaire extends Component {
  render(){
    return(
      <div>
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
      </div>
    )
  }
}

const mapCarSeatStateToProps = (state) => {
  return{
    isCarSeatTypeSelected: state.isColorSelected,
    carSeatType: state.colorSelected
  }
}

const mapCarSeatDispatchToProps = (dispatch ) => {
  return{
    convertible: () => dispatch({type:"convertible", isCarSeatTypeSelected: true, carSeatType: 'convertible'}),
    infant: () => dispatch({type:"infant", isCarSeatTypeSelected: true, carSeatType: 'infant'}),
    child: () => dispatch({type:"child", isCarSeatTypeSelected: true, carSeatType: 'child'}),
    threein1: () => dispatch({type:"3in1", isCarSeatTypeSelected: true, carSeatType: '3 in 1'}),
    noprefcarseat: () => dispatch({type:"nopreferencecarseat", isCarSeatTypeSelected: true, carSeatType: null})
  }
}

export default connect(mapCarSeatStateToProps,mapCarSeatDispatchToProps)(CarSeatQuestionnaire);
