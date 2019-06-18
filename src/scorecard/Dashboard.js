import React from "react";
import Display from "./Display";

class Dashboard extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  handleFoul = e => {
    e.preventDefault();
    console.log("HANDLE FOULD CLICKED");
    this.setState({ balls: 0, strikes: 1 });
  };
  render() {
    console.log(this.state.strikes);
    return (
      <>
        This is the dashboard!
        <div>
          <button onClick={this.handleFoul}>Foul</button>
          <button onClick={this.handleHit}>Hit</button>
        </div>
        <div>
          <Display balls={this.state.balls} strikes={this.state.strikes} />
        </div>
      </>
    );
  }
}

export default Dashboard;
