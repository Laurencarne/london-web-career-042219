import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
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
