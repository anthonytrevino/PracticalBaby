import React,{Component} from 'react';

class Questionnaire extends Component{
  render(){
    return(
      <div className="questionnaire">
        <h1>What kind of car do you have?</h1>
        <ul className="questions">
        <li><button type="select" value="compactcar">Compact Car</button></li>
        <li><button type="select" value="suv">SUV</button></li>
        <li><button type="select" value="truck">Truck</button></li>

        
        </ul>

      </div>
    )
  }
}

export default Questionnaire;
