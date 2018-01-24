import React, { Component } from 'react';
import './PhysEx.css';

var exerciseList = [
  "60 second planks (L/R)",
  "100 bicycle sit ups",
  "3x25 pushups",
  "2x8 pullups",
  "2x30 burpees",
  "2x30 chair dips",
  "2x25 one-leg lunge squats (L/R)",
  "50 standing squats"
];

var stretchList = [
  "forward fold and glamor pose",
  "lunge w/ twist and baby pose",
  "figure four and triceps",
  "pigeon and frog",
  "crowd-pleaser and warrior",
  "kneeling lunge and knee to chest",
  "quads and puppy pose"
];

class PhysEx extends Component {

  constructor() {
    super();
    this.state = { exercise: '', stretch: '' };
  }

  componentDidMount() {
    let exercise = exerciseList[Math.floor(Math.random()*exerciseList.length)];
    let stretch = stretchList[Math.floor(Math.random()*stretchList.length)];
    this.setState({exercise: exercise, stretch: stretch});
  }

  render() {
      return (
        <div>
          <h6>Health</h6>
          <p id="exercise">Exercise: {this.state.exercise}</p>
          <p id="stretch">Stretch: {this.state.stretch}</p>
        </div>
      );
  }

}

export default PhysEx;
