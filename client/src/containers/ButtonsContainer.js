import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SelectionButton from "../components/SelectionButton";

class ButtonsContainer extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><SelectionButton name="Players" setDisplay={this.props.setDisplay} /></Col>
                    <Col><SelectionButton name="Star Players" setDisplay={this.props.setDisplay} /></Col>
                </Row>
            </Container>
        )
    }
}

export default ButtonsContainer
