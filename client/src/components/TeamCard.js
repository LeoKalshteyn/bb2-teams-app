import React from 'react';

import Card from 'react-bootstrap/Card'

import LikeButton from "../components/LikeButton";

const TeamCard = props => {

    const handleClick = (e) => {
        props.view(props.info.id, "teams", 'DISPLAY_TEAMS');
    };

    return (
        <Card onClick={handleClick} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.info.name}<LikeButton /></Card.Title>
            </Card.Body>
            <Card.Img variant="bottom" style={{ height: '12rem' }} src={props.info.image} />
        </Card>
    )
}

export default TeamCard
