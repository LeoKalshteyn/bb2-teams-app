import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards  } from "../actions/dataActions";
import { NavLink } from 'react-router-dom';

import TeamCard from '../components/TeamCard'

import CardColumns from 'react-bootstrap/CardColumns'

class DataContainer extends Component {

  state = {
      cards: {
          teams: [],
          players: [],
          star_players: []
      }
  };

  componentDidMount() {
     this.props.fetchCards(this.props.path)
  }

  displayCards = () => {
      switch(this.props.path) {
          case "teams":
              return (this.props.cards.teams.map(card => (
                  <NavLink style={{ color: "black" }} to={`/teams/${card.id}`} key={card.id}><TeamCard view={this.props.displayTeams} info={card} /></NavLink>
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
          fetchCards: path => dispatch(fetchCards(path)),
          displayTeams: id => dispatch({ type: 'DISPLAY_TEAMS', id })
      }
  };

  export default connect(mapStateToProps, mapDispatchToProps)(DataContainer)
