import React, { Component } from 'react';
import PlayerCard from '../components/PlayerCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class PlayersContainer extends Component {

    cardProps = {
        name: "Beastman",
        player_type: "Lineman",
        cost: "70k",
        movement_allowance: "5",
        strength: "3",
        agility: "3",
        armour_value: "4",
        skills: "Horns"
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col><PlayerCard info={this.cardProps} /></Col>
                </Row>
            </Container>
        )
    }
}

export default PlayersContainer
