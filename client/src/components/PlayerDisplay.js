// stateless component that handles the diplay of players when clicked

import React from 'react';
import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'

const PlayerDisplay = props => {
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
                        <Card.Text>Views: {info.views}</Card.Text>
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

// returns player object of the current state of component
const mapStateToProps = state => {
    return {
        info: state.players.object
    }
};

// connects PlayerDisplay to the store, making any changes to the state avalible to this component.
export default connect(mapStateToProps)(PlayerDisplay);
