import React, { Component } from 'react';

class LogIn extends Component {
    render() {
        return (
            <div>
                <h1>Log In</h1>
                <ul id="login">
                    <li>Username</li>
                    <li>Password</li>
                    <li><button type="submit">Log In</button> </li>
                </ul>
            </div>
        )
    }
}

export default LogIn;
