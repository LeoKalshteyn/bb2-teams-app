import React from 'react';

const TeamDisplay = props => {
    const info = props.info;
    return (
        <div>
            <h1>{info.name}</h1>
        </div>
    )
};

export default TeamDisplay
