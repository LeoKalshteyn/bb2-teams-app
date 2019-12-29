import React from 'react';
import { connect } from 'react-redux';

const TeamDisplay = props => {
    const info = props.info;

    const displayPiece = () => {
        if (info) {
            return (
                <div>
                    <h1>{info.name}</h1>
                </div>
            )
        }
    };

    return (
        <div>
            {displayPiece()}
        </div>
    )
};

export default TeamDisplay
