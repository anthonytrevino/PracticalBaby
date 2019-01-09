import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import HomePage from './Components/HomePage/HomePage';
// import Questionnaire from './Components/Questionnaire/Questionnaire';
import Register from './Components/Register/Register';
import LogIn from './Components/LogIn/LogIn';
import NavBar from './Components/NavBar/NavBar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
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
              </div>
            </React.Fragment>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
