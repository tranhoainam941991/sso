import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../actions'

import Header from './Header';
import Landing from './Landing';

const DashBoard = () => <h2>DashBoard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route path="/" component={Landing} exact />
          <Route path="/surveys" component={DashBoard} exact />
          <Route path="/surveys/new" component={SurveyNew} />
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);