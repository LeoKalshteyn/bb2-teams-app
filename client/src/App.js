import React from 'react';
import './App.css';
import { connect } from 'react-redux'

import ButtonsContainer  from './containers/ButtonsContainer';
import TeamsContainer from './containers/TeamsContainer';
import PlayersContainer from './containers/PlayersContainer';
import StarPlayersContainer from './containers/StarPlayersContainer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
          <div className="App">
            <Route path="/teams" component={TeamsContainer} />
            <Route path="/players" component={PlayersContainer} />
            <Route path="/star players" component={StarPlayersContainer} />
            <Route exact path="/" component={ButtonsContainer} />
          </div>
      </Router>
  );
}

export default connect()(App);
