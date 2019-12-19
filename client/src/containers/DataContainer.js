import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from "../actions/teamActions";
import { NavLink } from 'react-router-dom';

import TeamCard from '../components/TeamCard'

import CardColumns from 'react-bootstrap/CardColumns'

class DataContainer extends Component {

  state = {
      cards: []
  };

  componentDidMount() {
     this.props.fetchTeams()
  }

  displayCards = () => {
      if(this.props.cards.length > 0) {
          return (this.props.cards.map(card => (
              <NavLink to="/teams/1" key={card.id}><TeamCard view={this.props.displayPiece} info={card} /></NavLink>
          )))
      }
      else {
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
          fetchTeams: () => dispatch(fetchTeams()),
          displayPiece: id => dispatch({ type: 'DISPLAY_PIECE', id })
      }
  };

  export default connect(mapStateToProps, mapDispatchToProps)(DataContainer)
