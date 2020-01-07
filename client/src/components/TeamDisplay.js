import React from 'react';

const TeamDisplay = props => {
    const info = props.info;

    if (info) {
        return (
            <div>
                <h1>{info.name}</h1>
            </div>
        )
    }

    else {
        return (
            <div>Loading</div>
        )
    }
};


export default TeamDisplay
