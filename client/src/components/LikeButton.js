import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'

class LikeButton extends Component {
  state = {
      count: 0
    }

  increment = () => {
  //    console.log("test")
      let newCount = this.state.count + 1
      this.setState({
        count: newCount
      })
    }

    render() {
      return (
        <div>
          <Button
            onClick={e => {
              e.preventDefault();
              this.increment();
            }}
          >
            Likes: {this.state.count}{" "}
          </Button>
        </div>
      );
    }
  }

export default LikeButton;
