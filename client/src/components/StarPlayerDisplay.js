import React from 'react';
import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'

const StarPlayerDisplay = props => {
    const info = props.info

    const displayObject = () => {
        if (info) {
            return (
                <div>
                  <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{info.name}</Card.Title>
                        <Card.Text>Player Type: {info.player_type}</Card.Text>
                        <Card.Text>Cost: {info.cost}</Card.Text>
                        <Card.Text>Movement Allowance: {info.movement_allowance}</Card.Text>
                        <Card.Text>Strength: {info.strength}</Card.Text>
                        <Card.Text>Agility: {info.agility}</Card.Text>
                        <Card.Text>Armour Value: {info.armour_value}</Card.Text>
                        <Card.Text>Skills: {info.skills}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
            )
        }

        else {
            return <div>Loading</div>
        }
    };

    return (
        <div>
            {displayObject()}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        info: state.star_players.object
    }
};

export default connect(mapStateToProps)(StarPlayerDisplay);
