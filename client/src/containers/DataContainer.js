import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import TeamCard from '../components/TeamCard'
import PlayerCard from '../components/PlayerCard';

import CardColumns from 'react-bootstrap/CardColumns'

class DataContainer extends Component {

  displayCards = () => {
      switch(this.props.path) {
          case "teams":
              return (this.props.teams.cards.map(card => (
                  <NavLink style={{ color: "black" }} to={`/teams/${card.id}`} key={card.id}><TeamCard info={card} /></NavLink>
              )));

          case "players":
              return (this.props.players.cards.map(card => (
                  <NavLink style={{ color: "black" }} to={`/players/${card.id}`} key={card.id}><PlayerCard info={card} /></NavLink>
              )));

          default:
              return (<div>Empty</div>)
      }
  };

  render() {
      return (
          <CardColumns>
              {this.displayCards()}
          </CardColumns>
        )
     }
  }

  const mapStateToProps = state => {
      return {
          teams: state.teams,
          players: state.players
      }
  };

  export default connect(mapStateToProps)(DataContainer)
