import React, { Component } from 'react';
import './Date.css';

class Date extends Component {

  render() {
    return (
      <div>
        <p className="date">
          {this.props.time.format("dddd, MMMM Do, YYYY")}
        </p>
      </div>
    );
  }

}

export default Date;
