import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from ".././actions/dataActions";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class TeamFilter extends Component {
  constructor() {
      super();
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
                      {this.state.teams.map(team => {
                          return <div key={team.id}></div>
                      })}
              </div>
            </Row>
        </Container>
        )
      }


    }

    const mapStateToProps = state => {
        return {
        }
    };

const mapDispatchToProps = dispatch => {
        return {
            fetchTeams: params => dispatch(fetchTeams(params)),
        }
    };




export default connect(mapStateToProps, mapDispatchToProps)(TeamFilter)
