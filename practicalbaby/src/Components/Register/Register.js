import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                <h1>Register</h1>
                <ul id="registration">
                    <li>First Name</li>
                    <li>Last Name</li>
                    <li>Email</li>
                    <li>Username</li>
                    <li>Password</li>
                    <li>Confirm Password</li>

                    <li><button type="submit">Register</button> </li>
                </ul>
            </div>
        )
    }
}

export default Register;