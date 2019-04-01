import React, { Component } from "react";
import "./clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.id = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <div className="text">hello world!</div>
        <i className="far fa-clock" />
        <div>
          it is <span>{this.state.date.toLocaleTimeString("en-US")}</span>
        </div>
      </div>
    );
  }
}

export default Clock;
