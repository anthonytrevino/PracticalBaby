import React, {Component} from 'react';
import {connect} from 'react-redux';


class BrandQuestionnaire extends Component {
  render(){
    return(
      <div>
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
      </div>
    )
  }
}

const mapBrandStateToProps = (state) => {
  return{
    isBrandSelected: state.isBrandSelected,
    brandSelected: state.brandSelected
  }
}

const mapBrandDispatchToProps = (dispatch ) => {
  return{
    graco: () => dispatch({type:"graco", isBrandSelected: true, brandSelected: 'Graco'}),
    evenflo: () => dispatch({type:"evenflo", isBrandSelected: true, brandSelected: 'Evenflo'}),
    cosco: () => dispatch({type:"cosco", isBrandSelected: true, brandSelected: 'Cosco'}),
    chicco: () => dispatch({type:"chicco", isBrandSelected: true, brandSelected: 'Chicco'}),
    nopref: () => dispatch({type:"nopreferencebrand", isBrandSelected: true, brandSelected: null})
  }
}

export default connect(mapBrandStateToProps,mapBrandDispatchToProps)(BrandQuestionnaire);
