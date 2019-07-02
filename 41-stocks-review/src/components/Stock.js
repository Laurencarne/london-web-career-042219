import React from 'react'

// By setting the onClick property to run an arrow function with
// a function call of props.clickFunction, we can pass in different
// functions to the component as clickFunction depending on which
// container component it is being rendered from. This is what enables us
// to add the stock to the portfolio if it is in the stocks list, and then
// remove it from the portfolio with a different function if it is in
// the portfolio list without having to create different components to be
// rendered by each different container component.

const Stock = (props) => (
  <div key={props.index} onClick={() => props.clickFunction(props.stock)}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">
            {props.stock.ticker} : {props.stock.price}
          </p>
          <p className="card-text">
              Type: {props.stock.type}

            </p>
      </div>
    </div>


  </div>
);

export default Stock
