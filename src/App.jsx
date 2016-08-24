import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li><Link to="about">About</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>

        {this.props.children}
      </div>
    )   
  }
}

export default App;