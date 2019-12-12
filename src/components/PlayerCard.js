import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class PlayerCard extends Component {
    render() {
        return (
            <Container>
                <Row><Col>{this.props.info.name}</Col></Row>
                <Row><Col>{this.props.info.player_type}</Col></Row>
                <Row><Col>{this.props.info.cost}</Col></Row>
                <Row><Col>{this.props.info.movement_allowance}</Col></Row>
                <Row><Col>{this.props.info.strength}</Col></Row>
                <Row><Col>{this.props.info.agility}</Col></Row>
                <Row><Col>{this.props.info.armour_value}</Col></Row>
                <Row><Col>{this.props.info.skills}</Col></Row>
            </Container>
        )
    }
}

export default PlayerCard
