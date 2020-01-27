import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'

const Jumbotron = () => {
  return(
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <img variant="top" src='../assets/bb2.jpg' />
        </Container>
      </Jumbo>
  )
}

export default Jumbotron
