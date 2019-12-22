import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards, fetchTeams } from ".././actions/dataActions";

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class TeamFilter extends Component {

    state = {
      //  team: 'Select Team'
    };


    handleTeamSelection = e => {
        this.props.setTeam(e.target.title);
        this.props.fetchTeams(e.target.title)
    };

    render() {
        console.log(this.state);
        return (
          <DropdownButton id="dropdown-team-button" title={this.props.team_name}>
              {['Chaos', 'High Elves', 'Orcs'].map(cls => (
                  <div key={cls}>
                      <Dropdown.Item onClick={this.handleTeamSelection} title={cls}>{cls}</Dropdown.Item>
                  </div>
              ))}
          </DropdownButton>
        )
      }
    }

    TeamFilter.defaultProps = {
        team_name: "Select Team"
    };

    const mapStateToProps = state => {
        return {
            team_name: state.team_name
        }
    };

const mapDispatchToProps = dispatch => {
        return {
            fetchCards: path => dispatch(fetchCards(path)),
            fetchTeams: params => dispatch(fetchTeams(params)),
            setTeam: team_name => dispatch({ type: "SET_TEAM", team_name })
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)(TeamFilter)
