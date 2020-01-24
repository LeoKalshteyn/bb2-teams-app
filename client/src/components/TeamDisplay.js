import React from 'react';
import { connect } from 'react-redux';

const TeamDisplay = props => {
    const info = props.info;

    const displayObject = () => {
        if (info) {
            return (
                <div>
                    <h1>{info.name}</h1>
                    <img variant="bottom" src={info.image} />
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
        info: state.teams.object
    }
};

export default connect(mapStateToProps)(TeamDisplay);
