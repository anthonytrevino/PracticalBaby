import React, { Component } from 'react';
import ProfilePage from './Components/UserProfile/ProfilePage'
// import {connect} from 'react-redux';
import './App.css';
import 'tachyons';
// import HomePage from './Components/HomePage/HomePage';
// import Questionnaire from './Components/Questionnaire/Questionnaire';


import 'tachyons';
import HomePage from './Components/HomePage/HomePage';
import Questionnaire from './Components/Questionnaire/Questionnaire';
import Register from './Components/Register/Register';
import LogIn from './Components/LogIn/LogIn';
import NavBar from './Components/NavBar/NavBar';
import NavBarLogged from './Components/NavBarLogged/NavBarLogged';
import { Route, Switch } from 'react-router-dom';
// import FilteredResults from './Components/FilteredResults/FilteredResults';
import CarSeatQuestions from './Components/Questionnaire/CarSeatQuestions/CarSeatQuestions.js';
import { Router } from 'react-router-dom'
import history from './Components/history/history'
// import reducer from './reducers/reducer.js';

import Guide from './Components/Guide/Guide';


class App extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      test: 'test',
      isSignedIn: false,
      user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        joined: ''
      }
    }
  }



  // componentDidMount() {
  //   fetch('http://localhost:9000')
  //     .then(response => response.json())
  //     .then(console.log)
  // }

  loadUser = (data) => {
    console.log(data)
    this.setState({
      user: {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        username: data.username,
        joined: data.joined
      },
      isSignedIn: true
    })
    console.log(this.state.isSignedIn)
  }



  render() {
    const isSignedIn = this.state.isSignedIn;
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <React.Fragment>
              <div>
                {isSignedIn ? (
                  <NavBarLogged user={this.state.user} isSignedIn={this.state.isSignedIn} />
                ) : (
                    <NavBar />
                  )}
              </div>
              <div>
                <Route exact path={"/"} render={() => <HomePage />} />
                <Route path={"/userprofile"} render={() => <ProfilePage user={this.state.user} />} />
                <Route path={"/register"} render={() => <Register loadUser={this.loadUser} />} />
                <Route path={"/login"} render={() => <LogIn loadUser={this.loadUser} />} />
                <Route path={"/carseatquestions"} component={CarSeatQuestions} />

                <Route path={"/questionnaire"} component={Questionnaire} />
                <Route path={"/guide"} component={Guide} />
              </div>
            </React.Fragment>
          </Switch>





        </Router>
      </div>
    )
  }
}




export default App;
