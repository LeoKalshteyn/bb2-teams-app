import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStarPlayers, fetchTeams } from ".././actions/dataActions";

import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";

class StarPlayerFilter extends Component {
  constructor() {
      super();
      this.state = { data: [], currentTeam: 'Select Team' };
    }

    async fetchButtonTeams() {
      const response = await fetch(`/api/teams`);
      const json = await response.json();
      this.setState({ data: json });
    }

    componentDidMount(){
      this.fetchButtonTeams()
    }

    handleTeamSelection = e => {
        e.preventDefault();
        const { target: { title, team }} = e;
        this.props.setTeam(title);
        this.props.fetchStarPlayers(title);
        console.log(title, team, e.target.dataset.team)
        this.setState({ currentTeam: e.target.dataset.team });
    };

    render() {
        return (
            <Container>
                <Row>
                    <Dropdown id="dropdown-star-player-button" title={this.props.team}>
                      <Dropdown.Toggle>
                        {this.state.currentTeam}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                          {this.state.data.map(team => (
                            <div key={team}>
                                <Dropdown.Item onClick={this.handleTeamSelection} title={team.id} data-team={team.name}>{team.name}</Dropdown.Item>
                            </div>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        team: state.star_players.team
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchStarPlayers: params => dispatch(fetchStarPlayers(params)),
        fetchTeams: params => dispatch(fetchTeams(params)),
        setTeam: team => dispatch({ type: "SET_TEAM", team })

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StarPlayerFilter)
