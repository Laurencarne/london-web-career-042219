import React from "react";

class Pet extends React.Component {
  adoptionButton = pet => {
    if (pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>;
    } else {
      return (
        <button
          onClick={e => this.props.onAdoptPet(e, pet)}
          className="ui primary button"
        >
          Adopt pet
        </button>
      );
    }
  };

  render() {
    const {
      age,
      name,
      weight,
      gender,
      type,
      isAdopted,
      onAdoptPet
    } = this.props.pet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "female" ? "♀" : "♂"}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptionButton(this.props.pet)}
        </div>
      </div>
    );
  }
}

export default Pet;
