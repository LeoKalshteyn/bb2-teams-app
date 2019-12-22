import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SelectionButton from "../components/SelectionButton";

class NavButtonsContainer extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><SelectionButton name="Teams" /></Col>
                    <Col><SelectionButton name="Players" /></Col>
                    <Col><SelectionButton name="Star Players" /></Col>
                </Row>
            </Container>
        )
    }
}

export default NavButtonsContainer
