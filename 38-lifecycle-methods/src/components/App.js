import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import Clock from "./Clock";

class App extends React.Component {
  constructor() {
    super();
    console.log(this.__proto__.constructor.name, "constructed");

    this.state = {
      pets: [],
      filters: {
        type: "all"
      },
      mode: "clock"
    };
  }

  // is the best moment to fetch the data
  componentDidMount() {
    console.log(this.__proto__.constructor.name, "mounted");

    // let url = "/api/pets";
    // fetch(url)
    //   .then(data => data.json())
    //   .then(pets => this.setState({ pets }));
  }

  componentDidUpdate() {
    console.log(this.__proto__.constructor.name, "updated");
  }

  switchMode = () => {
    const selected = this.state.mode === "pets" ? "clock" : "pets";
    this.setState({
      mode: selected
    });
  };

  onAdoptPet = (e, pet) => {
    // get a copy of the pets array from state
    const petsCopy = [...this.state.pets];
    const animalFound = petsCopy.filter(animal => animal.id === pet.id);
    animalFound[0].isAdopted = !animalFound.isAdopted;
    this.setState({ pets: petsCopy });
  };

  onChangeType = e => {
    this.setState({ filters: { type: e.target.value } });
  };

  onFindPetsClick = e => {
    let url = "/api/pets";

    if (this.state.filters.type !== "all") {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(data => data.json())
      .then(pets => this.setState({ pets }));
  };

  petsOrClock = () => {
    if (this.state.mode === "pets") {
      return (
        <div>
          <header>
            <h1 className="ui dividing header">React Animal Shelter</h1>
          </header>
          <div className="ui container">
            <div className="ui grid">
              <div className="four wide column">
                <Filters
                  onChangeType={this.onChangeType}
                  onFindPetsClick={this.onFindPetsClick}
                />
              </div>
              <div className="twelve wide column">
                <PetBrowser
                  onAdoptPet={this.onAdoptPet}
                  pets={this.state.pets}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.mode === "clock") {
      return <Clock />;
    }
  };

  render() {
    console.log(this.__proto__.constructor.name, "rendered");

    return (
      <React.Fragment>
        <button onClick={this.switchMode}>timer/pets</button>
        <div className="ui container">{this.petsOrClock()}</div>
      </React.Fragment>
    );
  }
}

export default App;
