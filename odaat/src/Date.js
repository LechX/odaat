import React, { Component } from 'react';
import Moment from 'moment';
import './Date.css';

class Date extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: Moment().format("dddd, MMMM Do, YYYY")
    };
  }

  tick() {
    this.setState({
      date: Moment().format("dddd, MMMM Do, YYYY")
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
        <p className="date">
          {this.state.date}
        </p>
      </div>
    );
  }

}

export default Date;
