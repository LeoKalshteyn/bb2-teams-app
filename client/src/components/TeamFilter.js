import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from ".././actions/dataActions";
// import { sortTeams } from ".././actions/dataActions";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class TeamFilter extends Component {
  constructor(props) {
      super(props); // used to access and call functions on an object's parent
      this.state = { teams: [] };
    }

    handleTeamFetch = e => {
        this.props.fetchTeams()
    };

    render() {
      return (
        <Container>
            <Row>
              <div>
                  <button id="team-show-button" title="Show All Teams" onClick={this.handleTeamFetch}>Show All Teams</button>
              </div>
            </Row>
        </Container>
        )
      }

    }

    const mapStateToProps = state => {
        return {
            teams: state.teams
        }
    };

    const mapDispatchToProps = dispatch => {
        return {
            fetchTeams: params => dispatch(fetchTeams(params)),
            // sortTeams: params => dispatch(sortTeams(params))
        }
    };


export default connect(mapStateToProps, mapDispatchToProps)(TeamFilter)
