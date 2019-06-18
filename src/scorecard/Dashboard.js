import React from "react";
import Display from "./Display";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        This is the dashboard!
        <div>
          <button>Strike</button>
          <button>Ball</button>
          <button>Foul</button>
          <button>Hit</button>
        </div>
        <div>
          <Display />
        </div>
      </>
    );
  }
}

export default Dashboard;
