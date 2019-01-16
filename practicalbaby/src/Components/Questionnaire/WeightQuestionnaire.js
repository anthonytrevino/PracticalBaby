import React, {Component} from 'react';
import {connect} from 'react-redux';


class WeightQuestionnaire extends Component {
  render(){
    return(
      <div>
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
      </div>
    )
  }
}

const mapWeightStateToProps = (state) => {
  return{
    isMaxChildWeightSelected: state.isMaxChildWeightSelected,
    maxChildWeight: state.maxChildWeight
  }
}

const mapWeightDispatchToProps = (dispatch ) => {
  return{
    zeroto19: () => dispatch({type:"0-19", isMaxChildWeightSelected: true, maxChildWeight: 19}),
    twentyto29: () => dispatch({type:"20-29", isMaxChildWeightSelected: true, maxChildWeight: 29}),
    thirtyto39: () => dispatch({type:"30-39", isMaxChildWeightSelected: true, maxChildWeight: 39}),
    fortyto49: () => dispatch({type:"40-49", isMaxChildWeightSelected: true, maxChildWeight: 49}),
    noprefchildweight: () => dispatch({type:"nopreferencechildweight", isMaxChildWeightSelected: true, maxChildWeight: null})
  }
}

export default connect(mapWeightStateToProps,mapWeightDispatchToProps)(WeightQuestionnaire);
