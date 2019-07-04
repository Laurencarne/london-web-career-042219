import React from 'react';

  // Note: to set a radio button to be checked by default in React, add then
  // defaultChecked property to it. Also, to make sure only one of a set of
  // radio buttons can be checked at a time, give them all the same name
  // property, as below.

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input name="sort-buttons" type="radio" value="Alphabetically" defaultChecked onChange={props.setSortBy}/>
        Alphabetically
      </label>
      <label>
        <input name="sort-buttons" type="radio" value="Price" onChange={props.setSortBy}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.setFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
