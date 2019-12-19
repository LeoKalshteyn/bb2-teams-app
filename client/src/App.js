import React from 'react';
import './App.css';
import { connect } from 'react-redux'

import NavButtonsContainer  from './containers/NavButtonsContainer';
import TeamDisplay from "./components/TeamDisplay";
import DataContainer from "./containers/DataContainer";
import TeamFilter from "./components/TeamFilter";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const App = props => {
  return (
    <Container>
        <Router>
            <Switch>
                <Route path="/teams/:id">
                    <TeamDisplay info={props.info} />
                </Route>

                <Route path="/teams">
                    <Row>
                        <Col><TeamFilter /></Col>
                    </Row>
                    <Row>
                        <NavButtonsContainer />
                    </Row>
                    <Row>
                        <DataContainer />
                    </Row>
                </Route>

                <Route path="/">
                    <TeamFilter />
                </Route>
            </Switch>
        </Router>
    </Container>
  );

};

const mapStateToProps = state => {
    return {
        info: state.piece
    }
};

export default connect(mapStateToProps)(App);
