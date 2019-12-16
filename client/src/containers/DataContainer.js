import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from "../actions/teamActions";

import TeamCard from '../components/TeamCard'

import Container from 'react-bootstrap/Container'
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
              <TeamCard key={card.id} info={card} />
          )))
      }
      else {
          return (<div>Empty</div>)
      }
  };

  render() {
      return (
          <Container>
              <CardColumns>
                {this.displayCards()}
              </CardColumns>
          </Container>
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
          fetchTeams: () => dispatch(fetchTeams())
      }
  };

  export default connect(mapStateToProps, mapDispatchToProps)(DataContainer)
