import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components'
import bb2 from '../assets/bb2.jpg'

const Styles = styled.div`
  .jumbo {
    background: url(${bb2}) no-repeat fixed bottom;
    background-size: cover;
    height: 250px;
    position: relative;
  }

  .overlay{
    opacity: 0.2;
    position: absolute;
  }
`;

const Jumbotron = () => {
  return(
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h2>Teams and Players of Blood Bowl</h2>
        </Container>
      </Jumbo>
    </Styles>
  )
}

export default Jumbotron
