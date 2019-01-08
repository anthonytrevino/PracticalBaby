import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import HomePage from './Components/HomePage/HomePage';
// import Questionnaire from './Components/Questionnaire/Questionnaire';
import Layout from './Components/Layout/Layout';


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin'
    }
  }


  render() {
    return (
      <div className="App">
        <HomePage route={this.state.route} />



      </div>
    )
  }
}

export default App;
