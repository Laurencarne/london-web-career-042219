import React from 'react'

const OptionBar = (props) => {
  return(
    <div className="options-bar">
      <button onClick={props.showAllHogs}>Show All Hogs</button>
      <button onClick={props.filterGreasedHogs}>Filter Greased Hogs</button>
      <button onClick={props.sortByName}>Sort By Name</button>
      <button onClick={props.sortByWeight}>Sort By Weight</button>
    </div>
  )
}

export default OptionBar
