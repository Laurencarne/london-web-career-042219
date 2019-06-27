class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>tick tock</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
