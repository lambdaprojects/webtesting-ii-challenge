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
          <input type="text" name="balls" value={this.props.balls} readOnly />
        </div>
        <div>
          Strikes:{" "}
          <input
            type="text"
            name="strikes"
            value={this.props.strikes}
            readOnly
          />
        </div>
      </>
    );
  }
}

export default Display;
