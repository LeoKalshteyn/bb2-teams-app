import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import TeamCard from '../components/TeamCard'
import PlayerCard from '../components/PlayerCard';
import StarPlayerCard from '../components/StarPlayerCard';
import { displayObject } from '../actions/dataActions'

import CardColumns from 'react-bootstrap/CardColumns'

class DataContainer extends Component {

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
          <CardColumns>
              {this.displayCards()}
          </CardColumns>
        )
     }
  }

  const mapStateToProps = state => {
      return {
          teams: state.teams,
          players: state.players,
          star_players: state.star_players
      }
  };

  const mapDispatchToProps = dispatch => {
      return {
          displayObject: (id, category, type) => dispatch(displayObject(id, category, type))
      }
  };

  export default connect(mapStateToProps, mapDispatchToProps)(DataContainer)
