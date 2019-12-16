import React, { Component } from 'react';
import TeamCard from '../components/TeamCard'

import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'

class DataContainer extends Component {

  state = {
      cards: []
  };

  componentDidMount() {
      fetch('/teams')
          .then(res => res.json())
          .then(data => {
              this.setState({
                  cards: data
              })
          })

  }

  displayCards = () => {
      if(this.state.cards.length > 0) {
          return (this.state.cards.map(card => (
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

export default DataContainer
