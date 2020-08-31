import React from 'react';

import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

const SelectionButton = props => {

        const name = props.name.toLowerCase();
        return (
            <NavLink to={`/${name}`} activeStyle={{ disabled: true }} id={name}><Button id="category-button">{props.name}</Button></NavLink>
        )
    }


export default SelectionButton
