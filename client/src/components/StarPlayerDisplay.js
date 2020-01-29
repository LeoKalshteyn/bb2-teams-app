import React from 'react';

import { connect } from 'react-redux'

const StarPlayerDisplay = props => {
    const info = props.info

    const displayObject = () => {
        if (info) {
            return (
                <div>
                    <h1>{info.name}</h1>
                    <h2>Player Type: {info.player_type}</h2>
                    <h2>Cost: {info.cost}</h2>
                    <h2>Movement Allowance: {info.movement_allowance}</h2>
                    <h2>Strength: {info.strength}</h2>
                    <h2>Agility: {info.agility}</h2>
                    <h2>Armour Value: {info.armour_value}</h2>
                    <h2>Skills: {info.skills}</h2>
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
