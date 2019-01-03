import React, {Component} from 'react';
import Register from './Register';
import './styles.css';

class NavBar extends Component{

  render(){
    return(
      <div className="navbar">
        <ul id="navul">
          <li>Practical Baby</li>
          <li>Logo</li>
          <li>Login</li>
          <li><Register /></li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
