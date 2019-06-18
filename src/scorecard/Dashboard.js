import React from "react";
import Display from "./Display";

class Dashboard extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  /*
   * Handles the foul click event
   */
  handleFoul = e => {
    e.preventDefault();
    let numBalls = this.state.balls;
    let numStrikes = this.state.strikes;

    // Based on the number of strikes the value will be incremented
    switch (numStrikes) {
      case 0: {
        numStrikes = numStrikes + 1;
        break;
      }

      case 1: {
        numStrikes = numStrikes + 2;
        break;
      }
      case 2: {
        numStrikes = 2;
        break;
      }
      default:
        break;
    }

    // if number of strikes is 3, both number of balls and strikes = 0
    if (numStrikes === 3) {
      numBalls = 0;
      numStrikes = 0;
    }
    this.setState({ balls: numBalls, strikes: numStrikes });
  };

  /*
   * Handles the hit click event
   */
  handleHit = e => {
    e.preventDefault();
    this.setState({ balls: 0, strikes: 0 });
  };

  /*
   * Handles the balls click event
   */
  handleBalls = e => {
    e.preventDefault();
    let numBalls = this.state.balls;
    let numStrikes = this.state.strikes;
    if (numBalls === 4) {
      numBalls = 0;
      numStrikes = 0;
    } else {
      numBalls = numBalls + 1;
    }
    this.setState({ balls: numBalls, strikes: numStrikes });
  };

  //Default render
  render() {
    return (
      <>
        This is the dashboard!
        <div>
          <button title="buttonFoul" onClick={this.handleFoul}>
            Foul
          </button>
          <button title="buttonBall" onClick={this.handleBalls}>
            Ball
          </button>
          <button title="buttonHit" onClick={this.handleHit}>
            Hit
          </button>
        </div>
        <div>
          <Display balls={this.state.balls} strikes={this.state.strikes} />
        </div>
      </>
    );
  }
}

export default Dashboard;
