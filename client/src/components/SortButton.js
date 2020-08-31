import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { sortTeams } from ".././actions/dataActions";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class SortButton extends Component {
  constructor() {
      super(); // used to access and call functions on an object's parent
      this.state = { cards: [] };
      this.handleTeamSort = this.handleTeamSort.bind(this);
    }

    handleTeamSort(e) {
      this.setState({
        cards: [...this.state.cards].sort((card1, card2) =>
          card1.name.localeCompare(card2.name))
      });
    }

    // handleTeamSort = e => {
    //   this.setState(state => {
    //     const sortTeams = [].concat(this.state.teams)
    //         .sort((team1, team2) => team1.name > team2.name)
    //     return {
    //       teams,
    //     };
    //   });
    // };

    // handleTeamSort = e => {
    //   this.setState({
    //     teams: [...this.state.teams].sort(function(team1, team2) {
    //       if (team1.name < team2.name) {
    //         return -1;
    //       }
    //       if (team1.name > team2.name) {
    //         return 1;
    //       }
    //
    //       return 0;
    //     })
    //   });
    // }

    render() {
      return (
        <Container>
            <Row>
              <div>
                  <button id="sort-button" title="Sort Teams" onClick={this.handleTeamSort}>Sort Teams</button>
                  <ul> {this.state.cards.map((e, i) => <li key={i}>{e.name}</li>)} </ul>
              </div>
            </Row>
        </Container>
        )
      }

    }

export default SortButton
