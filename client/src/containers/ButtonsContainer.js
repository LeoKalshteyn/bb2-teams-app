import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SelectionButton from "../components/SelectionButton";
import TeamFilter from '../components/TeamFilter';

class ButtonsContainer extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><SelectionButton name="Players" /></Col>
                    <Col><SelectionButton name="Star Players" /></Col>
                    <Col><TeamFilter name="Select Team" /></Col>
                </Row>
            </Container>
        )
    }
}

export default ButtonsContainer
