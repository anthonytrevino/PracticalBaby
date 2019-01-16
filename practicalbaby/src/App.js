import React, { Component } from 'react';
// import './App.css';
import 'tachyons';
import HomePage from './Components/HomePage/HomePage';
import Register from './Components/Register/Register';
import LogIn from './Components/LogIn/LogIn';
import NavBar from './Components/NavBar/NavBar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';




class App extends Component {
  constructor() {
    super();
    this.state = {
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
    return (
      <div className="App">
        <Router>
          <Switch>
            <React.Fragment>
              <NavBar isSignedIn={this.state.isSignedIn} />
              <div>
                <Route exact path={"/"} render={() => <HomePage />} />
                <Route path={"/register"} render={() => <Register />} loadUser={this.loadUser} />
                <Route path={"/login"} render={() => <LogIn loadUser={this.loadUser} />} />
              </div>
            </React.Fragment>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
