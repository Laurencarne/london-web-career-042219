import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  componentDidMount() {
    console.log(this.__proto__.constructor.name, "mounting");
  }

  componentDidUpdate() {
    console.log(this.__proto__.constructor.name, "updated");
  }

  constructor(props) {
    super(props);
    console.log(this.__proto__.constructor.name, "constructed");
  }
  render() {
    console.log(this.__proto__.constructor.name, "rendered");
    return (
      <div>
        {this.props.pets.map(pet => (
          <Pet key={pet.id} onAdoptPet={this.props.onAdoptPet} pet={pet} />
        ))}
      </div>
    );
  }
}

export default PetBrowser;
