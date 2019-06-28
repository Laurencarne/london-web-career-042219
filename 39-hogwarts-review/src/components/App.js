import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from "./HogContainer"
import OptionBar from "./OptionBar"

class App extends Component {

  constructor() {
    super()
    this.state = {hogs: hogs}
  }

  showAllHogs = () => {
    this.setState({hogs: hogs})
  }

  filterGreasedHogs = () => {
    this.setState({hogs: this.state.hogs.filter(hog => hog.greased)})
  }

  sortByName = () => {
    this.setState({hogs: this.state.hogs.sort((a,b) => a.name.localeCompare(b.name))})
  }

  sortByWeight = () => {
    this.setState({hogs: this.state.hogs.sort((a,b) => b.weight - a.weight)})
  }

  render() {
    return (
      <div className="App">
        < Nav />
        <OptionBar sortByWeight={this.sortByWeight} sortByName={this.sortByName} showAllHogs={this.showAllHogs} filterGreasedHogs={this.filterGreasedHogs} />
        <HogContainer hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
