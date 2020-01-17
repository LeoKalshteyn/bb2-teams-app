import React from 'react';

import Card from 'react-bootstrap/Card'

const StarPlayerCard = props => {

    const handleClick = () => {
        props.view(props.info.id, 'DISPLAY_STAR_PLAYERS');
    };

    return (
        <Card onClick={handleClick} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.info.name}</Card.Title>
                <Card.Text>Player Type: {props.info.player_type}</Card.Text>
                <Card.Text>Cost: {props.info.cost}</Card.Text>
                <Card.Text>Movement Allowance: {props.info.movement_allowance}</Card.Text>
                <Card.Text>Strength: {props.info.strength}</Card.Text>
                <Card.Text>Agility: {props.info.agility}</Card.Text>
                <Card.Text>Armour Value: {props.info.armour_value}</Card.Text>
                <Card.Text>Skills: {props.info.skills}</Card.Text>
            </Card.Body>
        </Card>
    )
};

export default StarPlayerCard
