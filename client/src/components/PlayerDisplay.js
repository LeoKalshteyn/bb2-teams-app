import React from 'react';
import { connect } from 'react-redux'

const PlayerDisplay = props => {
    const info = props.info

    const displayPlayerObject = () => {
        if (info) {
            return (
                <div>
                    <h1>{info.name}</h1>
                </div>
            )
        }

        else {
            return <div>Loading</div>
        }
    };

    return (
        <div>
            {displayPlayerObject()}
        </div>
    )
};


const mapStateToProps = state => {
    return {
        info: state.players.player_object
    }
};

export default connect(mapStateToProps)(PlayerDisplay);
