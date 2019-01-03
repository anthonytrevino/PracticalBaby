import React, { Component } from 'react';
import './App.css';
import HomePage from './Components/HomePage.js';
import Questionnaire from './Components/Questionnaire/Questionnaire';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
      <HomePage />
        <Questionnaire/>
      </div>
    )
  }
}

export default App;
