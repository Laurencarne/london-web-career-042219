import React from "react";
import Painting from "./Painting";

class PaintingList extends React.Component {
  state = {
    searchTerm: ""
  };

  filterPaintings = (paintings, searchTerm) =>
    paintings.filter(painting =>
      painting.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  renderPaintings = paintings =>
    paintings.map((painting, i) => (
      <Painting
        id={painting.id}
        title={painting.title}
        img_src={painting.image}
      />
    ));

  render() {
    const { paintings } = this.props;
    const filteredPaintings = this.filterPaintings(
      paintings,
      this.state.searchTerm
    );

    return (
      <div className="painting-list">
        <div className="search-field">
          <input
            type="text"
            onChange={event => {
              this.setState({ searchTerm: event.target.value }, () =>
                console.log(this.state.searchTerm)
              );
            }}
          />
        </div>
        {this.renderPaintings(filteredPaintings)}
      </div>
    );
  }
}

export default PaintingList;
