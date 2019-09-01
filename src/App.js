import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './screens/login'
export default class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
        </div>
      </Router>
    );
  }
}
