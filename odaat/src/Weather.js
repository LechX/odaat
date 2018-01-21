import React, { Component } from 'react';
import Moment from 'moment';
import './Weather.css';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      forecast: [],
    };
  }

  componentDidMount() {
    fetch('http://api.wunderground.com/api/3f56fbf31b6373ae/hourly/q/'
          + this.props.state + '/'
          + this.props.city + '.json').then(response => {
      return response.json();
    }).then(data => {
      let forecast = data.hourly_forecast.map((hour) => {
        return (
          <p key={hour.FCTTIME.epoch}>Hour: {hour.FCTTIME.hour} QPF: {hour.qpf.english} Temp: {hour.temp.english}<br/></p>
        )
      });
      console.log(Moment().format('D')); {/* use this to only include today's forecast */}
      this.setState({forecast: forecast});
    })
  }

  render() {
    return (
      <div className="weather">
        {this.state.forecast}
      </div>
    );
  }

}

export default Weather;
