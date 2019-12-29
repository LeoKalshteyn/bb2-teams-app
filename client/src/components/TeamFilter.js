import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards, fetchTeams } from ".././actions/dataActions";
import Button from 'react-bootstrap/Button'


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

        <div>
            <button onClick={this.handleTeamFetch}>Show All Teams</button>
                {this.state.teams.map(team => {
                    return <div key={team.id}></div>
                })}
        </div>
        )
      }


    }

    const mapStateToProps = state => {
        return {
        }
    };

const mapDispatchToProps = dispatch => {
        return {
            fetchCards: path => dispatch(fetchCards(path)),
            fetchTeams: params => dispatch(fetchTeams(params)),
        }
    };




export default connect(mapStateToProps, mapDispatchToProps)(TeamFilter)
