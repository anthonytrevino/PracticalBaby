import React, {Component} from 'react';
import {connect} from 'react-redux';


class CarSeatQuestionnaire extends Component {
  render(){
    return(
      <div className="wholequestionnaire">
        <div>
          <h1>Car Seat Type</h1>
          <p className="questionheader">What type of car seat do you need? An infant car-seat? A child car-seat? or a convertible car seat that can hold infants or children?
             Will you want a 3 in 1 car seat that is Rear-facing('5pointharness'), Forward-facing('5 point harness'), and High back booster('vehicle shoulder & lap belt')?</p>
        <ul className="prefselection">
          <li><input type="radio" name="rad2" value="Convertible" onClick ={this.props.convertible}/>Convertible(Infant/Child)</li>
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
    isCarSeatTypeSelected: state.isCarSeatTypeSelected,
    carSeatType: state.carSeatType,
    step: state.step
  }
}

const mapCarSeatDispatchToProps = (dispatch ) => {
  return{
    convertible: () => dispatch({type:"convertible", isCarSeatTypeSelected: true, carSeatType: 'convertible', step:2}),
    infant: () => dispatch({type:"infant", isCarSeatTypeSelected: true, carSeatType: 'infant', step:2}),
    child: () => dispatch({type:"child", isCarSeatTypeSelected: true, carSeatType: 'child', step:2}),
    threein1: () => dispatch({type:"3in1", isCarSeatTypeSelected: true, carSeatType: '3 in 1', step:2}),
    noprefcarseat: () => dispatch({type:"nopreferencecarseat", isCarSeatTypeSelected: true, carSeatType: null, step:2})
  }
}

export default connect(mapCarSeatStateToProps,mapCarSeatDispatchToProps)(CarSeatQuestionnaire);
