import React, { Component } from 'react';

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class TeamFilter extends Component {

    state = {
        team: 'Select Team'
    };

    handleTeamSelection = e => {
        this.setState({
            team: e.target.title
        })
    };

    render() {
        console.log(this.state);
        return (
          <DropdownButton id="dropdown-team-button" title={this.state.team}>
              {['Chaos', 'High Elves', 'Orcs'].map(cls => (
                  <div key={cls}>
                      <Dropdown.Item onClick={this.handleTeamSelection} title={cls}>{cls}</Dropdown.Item>
                  </div>
              ))}
          </DropdownButton>
        )
      }
    }

export default TeamFilter
