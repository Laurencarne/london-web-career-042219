import React from "react";

class Filters extends React.Component {
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
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.props.onChangeType} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button
            onClick={this.props.onFindPetsClick}
            className="ui secondary button"
          >
            Find pets
          </button>
        </div>
      </div>
    );
  }
}

export default Filters;
