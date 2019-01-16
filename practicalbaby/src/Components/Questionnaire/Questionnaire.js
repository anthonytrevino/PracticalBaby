import React,{Component} from 'react';
import BrandQuestionnaire from '../Questionnaire/BrandQuestionnaire';
import CarSeatQuestionnaire from '../Questionnaire/CarSeatQuestionnaire';
import ColorQuestionnaire from '../Questionnaire/ColorQuestionnaire';
import WeightQuestionnaire from '../Questionnaire/WeightQuestionnaire';


class Questionnaire extends Component{

questionOneFunction=()=>{
  if(this.props.isBrandSelected===false){
    return<BrandQuestionnaire />
  }else if(this.props.isBrandSelected===true){
    return <CarSeatQuestionnaire />
  }else if(this.props.isCarSeatTypeSelected===true){
     return<ColorQuestionnaire />
  }else if(this.props.isColorSelected ===true){
    return <WeightQuestionnaire />
  };
}

  render(){
    return(
      <div className="questionnaire">

      {this.questionOneFunction()}

      </div>
    )
  }
}

const mapBrandStateToProps = (state) => {
  return{
    isBrandSelected: state.reducer.isBrandSelected,
    brandSelected: state.reducer.brandSelected
  }
}

// connect(mapStateToProps,mapDispatchToProps)
export default Questionnaire;
