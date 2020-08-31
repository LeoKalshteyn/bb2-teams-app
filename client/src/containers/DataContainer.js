import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import TeamCard from "../components/TeamCard";
import PlayerCard from "../components/PlayerCard";
import StarPlayerCard from "../components/StarPlayerCard";
import { displayObject } from "../actions/dataActions";

import CardColumns from "react-bootstrap/CardColumns";

class DataContainer extends Component {
  // state = {
  //   // Copy prop into state to render from state instead of props
  //   teams: this.props.sort_teams
  // };

  sortTeams = () => {
    this.props.sort_teams.cards.sort(function(team1, team2) {
        if (team1.name < team2.name) {
          return -1;
        }
        if (team1.name > team2.name) {
          return 1;
        }
        return 0;
      });
      // updates the state with the sorting of the sort teams props
      this.setState({
        teams: this.props.sort_teams
      });
  };

  displayCards = () => {
      switch(this.props.path) {
          case "teams":
              return (this.props.teams.cards.map(card => (
                  <NavLink style={{ color: "black" }} to={`/teams/${card.id}`} key={card.id}><TeamCard view={this.props.displayObject} info={card} /></NavLink>
              )));

          case "players":
              return (this.props.players.cards.map(card => (
                  <NavLink style={{ color: "black" }} to={`/players/${card.id}`} key={card.id}><PlayerCard view={this.props.displayObject} info={card} /></NavLink>
              )));

          case "star_players":
              return (this.props.star_players.cards.map(card => (
                  <NavLink style={{ color: "black" }} to={`/star_players/${card.id}`} key={card.id}><StarPlayerCard view={this.props.displayObject} info={card} /></NavLink>
              )));

          default:
              return (<div>Empty</div>)
      }
  };

  render() {
      return (
        <Fragment>
          <div>
            <button id="sort-button" title="Sort Teams" onClick={this.sortTeams}>Sort Teams</button>
          </div>
          <CardColumns>{this.displayCards()}</CardColumns>
        </Fragment>
      );
    }
  }

  const mapStateToProps = state => {
      return {
          sort_teams: state.teams, // returns sort teams prop of the state to this component
          teams: state.teams,
          players: state.players,
          star_players: state.star_players
        }
    };

    const mapDispatchToProps = dispatch => {
        return {
            displayObject: (id, category, type) => dispatch(displayObject(id, category, type)),
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer)
