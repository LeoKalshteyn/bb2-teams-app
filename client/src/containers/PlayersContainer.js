import React, { Component } from 'react';
import ButtonsContainer from "./ButtonsContainer";
import DataContainer from "./DataContainer";

class PlayersContainer extends Component {

    render() {
        return (
            <div>
                <ButtonsContainer />
                <DataContainer />
            </div>
        )
    }
}

export default PlayersContainer
