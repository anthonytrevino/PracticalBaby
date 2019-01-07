import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import HomePage from './Components/HomePage/HomePage';
// import Questionnaire from './Components/Questionnaire/Questionnaire';
import Layout from './Components/Layout/Layout';


class App extends Component {

  render() {
    return (
      <div className="App">
        <HomePage />
        {/* <Questionnaire /> */}

        {/* <div>
          <Layout>
            <p>Test</p>
          </Layout>
        </div> */}


      </div>
    )
  }
}

export default App;
