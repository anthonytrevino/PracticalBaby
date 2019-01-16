import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'



class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            redirect: false
        }
    }
    onfirstNameChange = (event) => {
        this.setState({ firstName: event.target.value })
    }

    onlastNameChange = (event) => {
        this.setState({ lastName: event.target.value })

    }
    onemailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onusernameChange = (event) => {
        this.setState({ username: event.target.value })
    }
    onpasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }
    onconfirmPasswordChange = (event) => {
        this.setState({ confirmPassword: event.target.value })
    }

    onSubmitSignUp = (event) => {
        event.preventDefault()
        console.log('I am working')
        console.log(this.state.firstName)
        fetch('http://localhost:9000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword

            })
        })

    }

    render() {
        return (
            <article className="signin br3 ba b--black-10 mv6 shadow-5 w-100 w-50-m w-50-l mw6 center mv2" >
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" name="firstname">First Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    onChange={this.onfirstNameChange} />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" name="lastname">Last Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    onChange={this.onlastNameChange} />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" type="text">Username</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="username"
                                    id="username"
                                    onChange={this.onusernameChange} />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" email="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onemailChange} />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" password="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onpasswordChange} />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" password="confirmpassword">Confirm Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password"
                                    name="confirmpassword"
                                    id="confirmpassword"
                                    onChange={this.onconfirmPasswordChange} />
                            </div>
                            <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> I accept the Terms and Conditions</label>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Register"
                                onClick={this.onSubmitSignUp} />
                        </div>
                        <div className="lh-copy mt3">
                            <Link to="/login" className="f6 link dim black db pointer link">Already have an account?<br></br>Log In Here</Link>
                        </div>
                    </form>
                </main>
            </article>
        );
    }
}

export default Register;


