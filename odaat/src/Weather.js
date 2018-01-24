import React, { Component } from 'react';
import Moment from 'moment';
import './Weather.css';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      layers: '',
      outerwear: '',
      upperBody: '',
      lowerBody: '',
      forecast: [],
      currentWeather: []
    };
  }

  componentDidMount() {

    fetch('http://api.wunderground.com/api/3f56fbf31b6373ae/conditions/q/'
          + this.props.state + '/'
          + this.props.city + '.json').then(response => {
      return response.json();
    }).then(data => {
      let time = Moment().format('HH');
      let temp = parseInt(data.current_observation.temp_f, 10);
      let qpf = data.current_observation.precip_1hr_in;
      this.setState({currentWeather: [ time, temp, qpf ] });
    });

    fetch('http://api.wunderground.com/api/3f56fbf31b6373ae/hourly/q/'
          + this.props.state + '/'
          + this.props.city + '.json').then(response => {
      return response.json();
    }).then(data => {
      let forecast = data.hourly_forecast.filter(
        (hour) => hour.FCTTIME.mday === Moment().format('D')
      ).map((hour) => {
        let time = hour.FCTTIME.hour;
        let temp = hour.temp.english;
        let qpf = hour.qpf.english;
        return [
          time,
          temp,
          qpf
        ]
      });
      this.setState({forecast: forecast});
    })

  }

  render() {
    return (
      <div className="weather">
        <h6>Weather</h6>
        <span>Currently: {this.state.currentWeather[1]} F, Precipitation: {this.state.currentWeather[2]}<br/></span>
        {/* <span>{this.state.apparel}</span>
        <span>{this.state.forecast}</span> */}
      </div>
    );
  }

}

export default Weather;
