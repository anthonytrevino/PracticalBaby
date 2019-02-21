import React, { Component } from 'react';
import BrandQuestionnaire from '../Questionnaire/BrandQuestionnaire';
import CarSeatQuestionnaire from '../Questionnaire/CarSeatQuestionnaire';
import ColorQuestionnaire from '../Questionnaire/ColorQuestionnaire';
import WeightQuestionnaire from '../Questionnaire/WeightQuestionnaire';
import { connect } from 'react-redux';
import './questionnaire.css';

class Questionnaire extends Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    let steps = [<BrandQuestionnaire />, <CarSeatQuestionnaire />, <ColorQuestionnaire />, <WeightQuestionnaire />]
    return (
      <div>

        {steps[this.props.step]}

      </div>
    )

  }
}

const mapBrandStateToProps = (state) => {
  return {
    isBrandSelected: state.isBrandSelected,
    brandSelected: state.brandSelected,
    step: state.step
  }
}

// const mapCarSeatStateToProps = (state) => {
//   return {
//     isCarSeatTypeSelected: state.isCarSeatTypeSelected,
//     carSeatType: state.carSeatType,
//     step: state.step
//   }
// }

// const mapColorStateToProps = (state) => {
//   return{
//     isColorSelected: state.isColorSelected,
//     colorSelected: state.colorSelected,
//     step: state.step
//   }
// }

// const mapWeightStateToProps = (state) => {
//   return{
//     isMaxChildWeightSelected: state.isMaxChildWeightSelected,
//     maxChildWeight: state.maxChildWeight,
//     // step: state.step
//   }
// }

// connect(mapStateToProps,mapDispatchToProps)
export default connect(mapBrandStateToProps, null)(Questionnaire);
