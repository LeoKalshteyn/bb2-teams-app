import React from 'react';
import './App.css';
import { connect } from 'react-redux'

import DataContainer from './containers/DataContainer'
import TeamsContainer from './containers/TeamsContainer';
import PlayersContainer from './containers/PlayersContainer';
import ButtonsContainer  from './containers/ButtonsContainer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
          <div className="App">
            <DataContainer />
            <Route path="/players" component={PlayersContainer} />
            <Route exact path="/" component={ButtonsContainer} />
          </div>
      </Router>
  );
}

export default connect()(App);
