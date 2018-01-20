import React, { Component } from 'react';
import Moment from 'moment';
import './Time.css';

class Time extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hours: Moment().format("h"),
      minutes: Moment().format("mm"),
      seconds: Moment().format("ss"),
      meridiem: Moment().format("A")
    };
  }

  tick() {
    this.setState({
      hours: Moment().format("h"),
      minutes: Moment().format("mm"),
      seconds: Moment().format("ss"),
      meridiem: Moment().format("A")
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p className="time">
          {this.state.hours}:{this.state.minutes} {this.state.meridiem}
        </p>
        <p id="seconds" className="rotate">:{this.state.seconds}</p>
      </div>
    );
  }

}

export default Time;
