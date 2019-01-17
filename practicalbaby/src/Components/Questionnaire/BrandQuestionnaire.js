import React, { Component } from 'react';
import { connect } from 'react-redux';


class BrandQuestionnaire extends Component {

  render(){
    return(

      <div className="wholequestionnaire">
        <h1>Brand Preference</h1>
          <p className="questionheader">Do you have a preferred brand of car seat?</p>
          <div>
          <ul className="prefselection">
            <li><input type="radio" name="rad" value="Graco" onClick ={this.props.graco}/>Graco</li>
            <li><input type="radio" name="rad" value="Evenflo" onClick ={this.props.evenflo}/>Evenflo</li>
            <li><input type="radio" name="rad" value="Cosco" onClick ={this.props.cosco}/>Cosco</li>
            <li><input type="radio" name="rad" value="Chicco" onClick ={this.props.chicco}/>Chicco</li>
            <li><input type="radio" name="rad" value="nopreferencebrand" onClick ={this.props.nopref}/>No preference</li>

  render() {
    return (
      <div className="wholequestionnaire">
        <h1>Brand Preference</h1>
        <p class="questionheader">Do you have a preferred brand of car seat?</p>
        <div>
          <ul className="prefselection">
            <li><input type="radio" name="rad" value="Graco" onClick={this.props.graco} />Graco</li>
            <li><input type="radio" name="rad" value="Evenflo" onClick={this.props.evenflo} />Evenflo</li>
            <li><input type="radio" name="rad" value="Cosco" onClick={this.props.cosco} />Cosco</li>
            <li><input type="radio" name="rad" value="Chicco" onClick={this.props.chicco} />Chicco</li>
            <li><input type="radio" name="rad" value="nopreferencebrand" onClick={this.props.nopref} />No preference</li>

          </ul>
        </div>
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

const mapBrandDispatchToProps = (dispatch) => {
  return {
    graco: () => dispatch({ type: "graco", isBrandSelected: true, brandSelected: 'Graco', step: 1 }),
    evenflo: () => dispatch({ type: "evenflo", isBrandSelected: true, brandSelected: 'Evenflo', step: 1 }),
    cosco: () => dispatch({ type: "cosco", isBrandSelected: true, brandSelected: 'Cosco', step: 1 }),
    chicco: () => dispatch({ type: "chicco", isBrandSelected: true, brandSelected: 'Chicco', step: 1 }),
    nopref: () => dispatch({ type: "nopreferencebrand", isBrandSelected: true, brandSelected: null, step: 1 })
  }
}

export default connect(mapBrandStateToProps, mapBrandDispatchToProps)(BrandQuestionnaire);
