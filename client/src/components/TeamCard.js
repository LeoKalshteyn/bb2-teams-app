import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'

class TeamCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{this.props.info.name}</Card.Title>
                </Card.Body>
                <Card.Img variant="bottom" src={this.props.info.image} />
            </Card>
        )
    }
}

export default TeamCard
