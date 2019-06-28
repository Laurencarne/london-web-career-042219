import React, { Component } from 'react'

class HogCard extends Component {

  constructor(){
    super()
    this.state = {clicked: false}
  }

  getFileName = () => {
    let name = this.props.hog.name.toLowerCase().split(" ").join("_")
    return require(`../hog-imgs/${name}.jpg`)
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  renderHogDetails = () => {
    if (this.state.clicked){
      return(
        <div>
          <p>Weight: {this.props.hog.weight}</p>
          <p>Medal: {this.props.hog.medal}</p>
          <p>Specialty: {this.props.hog.specialty} </p>
          <p>Greased?: {String(this.props.hog.greased)}</p>
        </div>
      )
    } 
  }

  render() {
    return(
      <div className="ui eight wide column" onClick={this.handleClick}>
        <h3>{this.props.hog.name}</h3>
        <img src={this.getFileName()} alt={this.props.hog.name}/>
        {this.renderHogDetails()}
      </div>
    )
  }
}

export default HogCard
