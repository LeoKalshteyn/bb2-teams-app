import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import TeamsContainer from './containers/TeamsContainer'
import PlayersContainer from './containers/PlayersContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
        <TeamsContainer />
      </div>
  );
}

export default connect()(App);
