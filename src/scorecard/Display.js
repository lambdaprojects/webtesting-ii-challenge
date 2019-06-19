import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: props.balls,
      strikes: props.strikes
    };
  }

  render() {
    return (
      <>
        <div>
          {" "}
          Balls:{" "}
          <input
            type="text"
            name="balls"
            title="inputBalls"
            value={this.props.balls}
            readOnly
          />
        </div>
        <div>
          Strikes:{" "}
          <input
            type="text"
            name="strikes"
            value={this.props.strikes}
            title="inputStrikes"
            readOnly
          />
        </div>
      </>
    );
  }
}

export default Display;
