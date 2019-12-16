import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'

class SelectionButton extends Component {

    handleClick = e => {
        this.props.setDisplay(e.target.id)
    };

    render() {
        const name = this.props.name.toLowerCase();
        return (
            <Button href={`/${name}`} id={name}>{this.props.name}</Button>
        )
    }
}

export default SelectionButton
