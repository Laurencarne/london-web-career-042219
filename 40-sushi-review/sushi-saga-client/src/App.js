import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state ={
    allTheSushi : [],
    index: 0,
    wallet: 100,
    eatenSushi: []
  }

componentDidMount = () => {
  fetch(API)
  .then(resp => resp.json())
  .then(data => this.setState({
    allTheSushi : data
  }))
} 

moreSushi = () => {
  if (this.state.index === this.state.allTheSushi.length - 4) {
    this.setState({
      index: 0
    })
  } else {
    this.setState({
      index: this.state.index + 4
    })
  }

  }

  eatSushi = (id) => {
    const selectedSushi = this.state.allTheSushi.find(sushi => sushi.id === id)
    if (selectedSushi.price > this.state.wallet) {
      alert("Stop stealing sushi")
    } else {
    if (!selectedSushi.eaten) {
      const sushisNew = this.state.allTheSushi.map(sushi => {
        if (sushi.id == id) {
          sushi.eaten = true
        }
        return sushi
      })
      this.setState({allTheSushi: sushisNew, eatenSushi: [...this.state.eatenSushi, id], wallet: this.state.wallet - selectedSushi.price})
      } else {
        alert("Sushi already eaten!")
      }
    }
  }
  


  render() {
    let nextFour = this.state.allTheSushi.slice(this.state.index, this.state.index + 4)
    return (
      <div className="app">
        <SushiContainer moreSushi={this.moreSushi} eatSushi={this.eatSushi} nextFour={nextFour}   />
        <Table eatenSushi={this.state.eatenSushi} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;