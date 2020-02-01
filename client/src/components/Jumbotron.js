import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components'
import bb2 from '../assets/bb2.jpg'

const Styles = styled.div`
  .jumbo {
    background: url(${bb2}) no-repeat;
    background-size: cover;
    height: 250px;
    position: relative;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0px 0px 10px black;
  }

  .jumbo h2 {
    color: white;
    margin-top:-40px;
    margin-left:30px;
    text-shadow: 2px 2px 5px black;
  }

  .overlay{
    opacity: 0.2;
    position: absolute;
    margin: 0 auto;
  }
`;

const Jumbotron = () => {
  return(
    <Styles>
      <Jumbo fluid className="jumbo">
          <h2>Teams and Players of Blood Bowl</h2>
      </Jumbo>
    </Styles>
  )
}

export default Jumbotron
