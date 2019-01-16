import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import 'tachyons';
import HomePage from './Components/HomePage/HomePage';
import Questionnaire from './Components/Questionnaire/Questionnaire';
import Register from './Components/Register/Register';
import LogIn from './Components/LogIn/LogIn';
import NavBar from './Components/NavBar/NavBar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import FilteredResults from './Components/FilteredResults/FilteredResults';
import CarSeatQuestions from './Components/Questionnaire/CarSeatQuestions/CarSeatQuestions.js';
// import reducer from './reducers/reducer.js';

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      route: 'signin',
      isSignedIn: false
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:9000')
  //     .then(response => response.json())
  //     .then(console.log)
  // }


  render() {
    return (
      <div className="App">
        <Router>

            <Switch>
              <React.Fragment>
                <NavBar />
                <div>
                  <Route exact path={"/"} render={() => <HomePage />} />
                  <Route path={"/register"} component={Register} />
                  <Route path={"/login"} component={LogIn} />
                  <Route path={"/carseatquestions"} component={CarSeatQuestions} />
                  <Route path={"/filteredresults"} component={FilteredResults} />
                  <Route path={"/questionnaire"} component={Questionnaire} />
                </div>
              </React.Fragment>
            </Switch>

        </Router>
      </div>
    )
  }
}




export default App;
