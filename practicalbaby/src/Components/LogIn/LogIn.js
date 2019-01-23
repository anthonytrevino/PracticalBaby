import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'
// import { withRouter } from 'react-router-dom'
import history from '../history/history'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {

            signInEmail: '',
            signInUsername: '',
            signInPassword: '',
            emailUsernameChange: 'null',
            response: 'Your username or password is incorrect. Please try again'
        }
    }
    onEmailUsernameChange = (event) => {
        this.setState({ emailUsernameChange: event.target.value })

    }
    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
        console.log(event.target.value)

    }

    onSubmitSignIn = (e) => {
        e.preventDefault()
        if (this.state.emailUsernameChange === 'null') {
            e.preventDefault()
            console.log(this.state.emailUsernameChange)
            console.log('I am working')
            this.setState({
                responseToLogin: 'Please enter valid email or username.'
            })
        } else {
            this.setState({
                responseToLogin: null
            })
            let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(this.state.emailUsernameChange)) {
                this.setState({
                    signInEmail: this.state.emailUsernameChange,
                    signInUsername: ''
                }, () => {
                    console.log("fetching with email")
                    fetch('http://localhost:5000/loginwEmail', {
                        method: 'post',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: this.state.signInEmail,
                            password: this.state.signInPassword
                        })
                    })
                        .then(response => response.json())
                        .then(user => {
                            if (user) {
                                this.props.loadUser(user)
                                history.push('/');
                            }
                        })

                })
            } else {
                this.setState({
                    signInUsername: this.state.emailUsernameChange,
                    signInEmail: ''
                }, () => {
                    fetch('http://localhost:5000/loginwUsername', {
                        method: 'post',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            username: this.state.signInUsername,
                            password: this.state.signInPassword
                        })

                    })
                        .then(response => response.json())
                        .then(user => {
                            if (user) {
                                this.props.loadUser(user)
                                history.push('/')
                            }
                        })

                }
                )
            }
        }
    }
    render() {
        return (
            <article className="signin br3 ba b--black-10 mv6 shadow-5 w-100 w-50-m w-50-l mw6 center">
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">

                                <label className="db fw6 lh-copy f6" email="text">Username or Email</label>
                                <p className="db fw6 lh-copy f6 error">{this.state.responseToLogin}</p>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="signin-emailusername"
                                    id="signin-emailusername"
                                    onChange={this.onEmailUsernameChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" password="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="singin-password"
                                    id="signin-password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                            <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={this.onSubmitSignIn} />
                        </div>
                        <div className="lh-copy mt3">
                            <Link to="/register" className="f6 link dim black db pointer link">No account yet? <br></br>Register here</Link>
                        </div>
                    </form>
                </main>
            </article>
        );
    }
}

export default SignIn;









// import React, { Component } from 'react';
// import '../styles.css';

// class LogIn extends Component {
//     render() {
//         return (
//           <div>
//             <form id="loginform">
//               <h1>Log In</h1>
//               <ul id="registration">

//                   <li>E-mail address  <input className="form-input" type="email" placeholder="Isabelle@gmail.com" name="emailaddress" required /></li>
//                   <li>Username  <input className="form-input" id="txt-input" type="text" placeholder="@Username" required /></li>
//                   <li>Password  <input className="form-input" type="password" placeholder="Password" name="password" required /></li>

//                   <li><input type="checkbox" name="rememberme"/>Remember me?</li>
//                   <li><button type="submit">Log In</button> </li>
//               </ul>
//                   <button type="submit">Need an account?</button>
//             </form>
//           </div>
//         )
//     }
// }

// export default LogIn;
