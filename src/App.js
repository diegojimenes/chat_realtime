import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './screens/login'

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import store from './redux/store/store'

export default class Home extends Component {
  render() {
    return (
      <Router>
        <Provider store={createStore(store, {}, applyMiddleware(ReduxThunk))}>
          <Route path="/" exact component={Login} />
        </Provider>
      </Router>
    );
  }
}
