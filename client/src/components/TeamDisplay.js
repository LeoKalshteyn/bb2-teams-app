import React from 'react';
import { connect } from 'react-redux';

import Card from 'react-bootstrap/Card'

const TeamDisplay = props => {
    const info = props.info;

    const displayObject = () => {
        if (info) {
            return (
                <div>
                <Card style={{ width: '50rem' }}>
                  <Card.Body>
                    <Card.Title>{info.name}</Card.Title>
                  </Card.Body>
                    <Card.Img variant="bottom" src={info.image} />
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
        info: state.teams.object
    }
};

export default connect(mapStateToProps)(TeamDisplay);
