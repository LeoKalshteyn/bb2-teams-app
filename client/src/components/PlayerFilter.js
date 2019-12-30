import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers, fetchTeams } from ".././actions/dataActions";

import Row from "react-bootstrap/Row";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";

class PlayerFilter extends Component {
  constructor() {
      super();
      this.state = { data: [] };
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
        this.props.setTeam(e.target.title);
        this.props.fetchPlayers({ team: e.target.title })
    };

    render() {
        return (
            <Container>
                <Row>
                    <DropdownButton id="dropdown-player-button" title={this.props.team}>
                          {this.state.data.map(team => (
                            <div key={team}>
                                <Dropdown.Item onClick={this.handleTeamSelection} title={team}>{team}</Dropdown.Item>
                            </div>
                        ))}
                    </DropdownButton>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        team: state.players.team
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlayers: params => dispatch(fetchPlayers(params)),
        fetchTeams: params => dispatch(fetchTeams(params)),
        setTeam: team => dispatch({ type: "SET_TEAM", team })

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerFilter)
