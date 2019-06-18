import React from "react";

class Display extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  handleChange = e => {
    e.persist();
    this.setState({
      ...this.state,
      [e.targe.name]: e.target.value
    });
  };
  render() {
    return (
      <>
        <div>
          {" "}
          Balls:{" "}
          <input
            type="text"
            name="balls"
            value={this.state.balls}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Strikes:{" "}
          <input
            type="text"
            name="strikes"
            value={this.state.strikes}
            onChange={this.handleChange}
          />
        </div>
      </>
    );
  }
}

export default Display;
