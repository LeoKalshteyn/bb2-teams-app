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
              return (this.props.cards.teams.map(card => (
                  <NavLink style={{ color: "black" }} to={`/teams/${card.id}`} key={card.id}><TeamCard view={this.props.displayPiece} info={card} /></NavLink>
              )));

          case "players":
              return (this.props.cards.players.map(card => (
                  <NavLink style={{ color: "black" }} to={`/players/${card.id}`} key={card.id}><PlayerCard view={this.props.displayPiece} info={card} /></NavLink>
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
          cards: state.cards,
          loading: state.loading
      }
  };

  const mapDispatchToProps = dispatch => {
      return {
          displayPiece: (id, type) => dispatch({ type, id })
      }
  };

  export default connect(mapStateToProps, mapDispatchToProps)(DataContainer)
