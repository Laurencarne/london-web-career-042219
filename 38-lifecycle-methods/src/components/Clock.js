import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log(`${this.__proto__.constructor.name} constructed`);
  }

  componentDidMount() {
    console.log(`${this.__proto__.constructor.name} did mount`);
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log(`${this.__proto__.constructor.name} did unmount`);
    // clearInterval(this.timerID);
  }

  componentDidUpdate() {
    console.log(`${this.__proto__.constructor.name} has updated`);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  breakComponent = () => {
    this.setState({ date: new Date() });
  };

  render() {
    console.log(`${this.__proto__.constructor.name} rendered`);
    // this.breakComponent();
    return (
      <div>
        <h1>tick tock</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
