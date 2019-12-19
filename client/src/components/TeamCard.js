import React from 'react';

import Card from 'react-bootstrap/Card'

const TeamCard = props => {

    const handleClick = () => {
        props.view(props.info.id);
    };

    return (
        <Card onClick={this.handleClick} style={{ width: '18rem', cursor: 'pointer' }}>
            <Card.Body>
                <Card.Title>{this.props.info.name}</Card.Title>
            </Card.Body>
            <Card.Img variant="bottom" src={this.props.info.image} />
        </Card>
    )
}

export default TeamCard
