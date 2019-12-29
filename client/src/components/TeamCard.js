import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'

class TeamCard extends Component {

    handleClick = () => {
      this.props.view(this.props.info.id);
    };

    render() {
        return (
            <Card onClick={this.handleClick} style={{ width: '18rem', cursor: 'pointer' }}>
                <Card.Body>
                    <Card.Title>{this.props.info.name}</Card.Title>
                </Card.Body>
                <Card.Img variant="bottom" src={this.props.info.image} />
            </Card>
        )
    }
}

export default TeamCard
