import React, {Component} from 'react';
import {connect} from 'react-redux';


class ColorQuestionnaire extends Component {
  render(){
    return(
      <div>
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
      </div>
    )
  }
}

const mapColorStateToProps = (state) => {
  return{
    isColorSelected: state.isColorSelected,
    colorSelected: state.colorSelected,
  }
}

const mapColorDispatchToProps = (dispatch ) => {
  return{
    red : () => dispatch({type:"red", isColorSelected: true, colorSelected: 'Red'}),
    blue : () => dispatch({type:"blue", isColorSelected: true, colorSelected: 'Red'}),
    pink : () => dispatch({type:"pink", isColorSelected: true, colorSelected: 'Red'}),
    black : () => dispatch({type:"black", isColorSelected: true, colorSelected: 'Red'}),
    noprefcolor: () => dispatch({type:"nopreferencecolor", isColorSelected: true, colorSelected: null})
  }
}

export default connect(mapColorStateToProps,mapColorDispatchToProps)(ColorQuestionnaire);
