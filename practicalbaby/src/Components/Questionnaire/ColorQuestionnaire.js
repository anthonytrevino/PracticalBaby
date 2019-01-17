import React, {Component} from 'react';
import {connect} from 'react-redux';


class ColorQuestionnaire extends Component {
  render(){
    return(
      <div className="wholequestionnaire">
        <div>
          <h1>Color Preference</h1>
          <p className="questionheader">What is your color preference for a car seat?</p>
        <ul className="prefselection" value="">
          <li><input type="radio" name="rad1" value="Red" onClick ={this.props.red}/>Red</li>
          <li><input type="radio" name="rad1" value="Blue" onClick ={this.props.blue}/>Blue</li>
          <li><input type="radio" name="rad1" value="Pink" onClick ={this.props.pink}/>Pink</li>
          <li><input type="radio" name="rad1" value="Black" onClick ={this.props.black}/>Black</li>
          <li><input type="radio" name="rad1" value="nopreferencecolor" onClick ={this.props.noprefcolor}/>No preference</li>
        </ul>
        </div>
      </div>
    )
  }
}

const mapColorStateToProps = (state) => {
  return{
    isColorSelected: state.isColorSelected,
    colorSelected: state.colorSelected,
    step: state.step
  }
}

const mapColorDispatchToProps = (dispatch ) => {
  return{
    red : () => dispatch({type:"red", isColorSelected: true, colorSelected: 'Red', step:3}),
    blue : () => dispatch({type:"blue", isColorSelected: true, colorSelected: 'Red', step:3}),
    pink : () => dispatch({type:"pink", isColorSelected: true, colorSelected: 'Red', step:3}),
    black : () => dispatch({type:"black", isColorSelected: true, colorSelected: 'Red', step:3}),
    noprefcolor: () => dispatch({type:"nopreferencecolor", isColorSelected: true, colorSelected: null, step:3})
  }
}

export default connect(mapColorStateToProps,mapColorDispatchToProps)(ColorQuestionnaire);
