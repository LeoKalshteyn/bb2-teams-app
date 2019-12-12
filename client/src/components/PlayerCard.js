import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'

class PlayerCard extends Component {
    render() {
        return (
          <Card style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>{this.props.info.name}</Card.Title>
                <Card.Text>Player Type: {this.props.info.player_type}</Card.Text>
                <Card.Text>Cost: {this.props.info.cost}</Card.Text>
                <Card.Text>Movement Allowance: {this.props.info.movement_allowance}</Card.Text>
                <Card.Text>Strength: {this.props.info.strength}</Card.Text>
                <Card.Text>Agility: {this.props.info.agility}</Card.Text>
                <Card.Text>Armour Value: {this.props.info.armour_value}</Card.Text>
                <Card.Text>Skills: {this.props.info.skills}</Card.Text>
            </Card.Body>
        </Card>
        )
    }
}

export default PlayerCard
