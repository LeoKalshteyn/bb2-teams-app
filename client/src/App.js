import React from 'react';
import './App.css';
import { connect } from 'react-redux'

import NavButtonsContainer  from './containers/NavButtonsContainer';
import DataContainer from "./containers/DataContainer";

import TeamDisplay from "./components/TeamDisplay";
import TeamFilter from "./components/TeamFilter";

import PlayerDisplay from "./components/PlayerDisplay";
import PlayerFilter from "./components/PlayerFilter";

import StarPlayerDisplay from "./components/StarPlayerDisplay";
import StarPlayerFilter from "./components/StarPlayerFilter";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Jumbotron from './components/Jumbotron'

const App = props => {
  return (
    <Container>
        <Router>
            <Switch>
                <Route path="/teams/:id">
                    <Jumbotron/>
                    <TeamDisplay info={props.info} />
                </Route>

                <Route path="/players/:id">
                    <Jumbotron/>
                    <PlayerDisplay info={props.info} />
                </Route>

                <Route path="/star_players/:id">
                    <Jumbotron/>
                    <StarPlayerDisplay info={props.info} />
                </Route>

                <Route path="/teams">
                    <Jumbotron/>
                    <Row>
                        <Col><TeamFilter path="teams" /></Col>
                    </Row>
                    <Row>
                        <NavButtonsContainer />
                    </Row>
                    <Row>
                        <DataContainer path="teams" />
                    </Row>
                </Route>

                <Route path="/players">
                    <Jumbotron/>
                    <Row>
                        <Col><PlayerFilter path="players" /></Col>
                    </Row>
                    <Row>
                        <NavButtonsContainer />
                    </Row>
                    <Row>
                        <DataContainer path="players" />
                    </Row>
                </Route>

                <Route path="/star_players">
                    <Jumbotron/>
                    <Row>
                        <Col><StarPlayerFilter path="star_players" /></Col>
                    </Row>
                    <Row>
                        <NavButtonsContainer />
                    </Row>
                    <Row>
                        <DataContainer path="star_players" />
                    </Row>
                </Route>

                <Route path="/">
                       <Jumbotron/>
                       <NavButtonsContainer />
                </Route>
            </Switch>
        </Router>
    </Container>
  );

};

const mapStateToProps = state => {
    return {
        info: state.object
    }
};

export default connect(mapStateToProps)(App);
