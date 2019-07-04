import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = "http://localhost:3000/stocks"

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolio: [],
      filterType: "All",
      sortBy: "Alphabetically"
    }
  }

  addToPortfolio = (selectedStock) => {
    if (this.state.portfolio.includes(selectedStock)) {
      alert("You already bought this stock!")
    } else {
    this.setState({portfolio: [...this.state.portfolio, selectedStock]})
    }
  }

  removeFromPortfolio = (selectedStock) => {
    // let portfolioIndex = this.state.portfolio.findIndex(stock => stock.id === selectedStock.id)
    // let portfolio = [...this.state.portfolio]
    // portfolio.splice(portfolioIndex, 1)
    // this.setState({portfolio: portfolio})
    this.setState({portfolio: this.state.portfolio.filter(stock => stock !== selectedStock)})
  }

  // sets the value of setFilter in state
  setFilter = (event) => {
    this.setState({filterType: event.target.value})
  }

  // sets the value of sortBy in state
  setSortBy = (event) => {
    this.setState({sortBy: event.target.value})
  }

  // This function takes a list of stocks as an argument. The filter function then
  // returns an array of all the stocks for which at least one of the two conditions
  // separated by the or (||) operator is true. The second statement ensures that
  // if the filterType is set to "All" the entire list will be passed through,
  // as in this situation this condition will always be true.
  getFilteredStocks = (stocks) => {
    return stocks.filter(stock => stock.type === this.state.filterType || this.state.filterType === "All")
  }

  // This function returns the list of stocks in state, sorted depending on
  // the value of the sortBy property in state. This property determines
  // which key from the sortFunctions object we've defined below we will select.
  // Each of the keys in this object point to an arrow function definition, not a call.
  // When we pass one of these into the sort function, they will then be called and sort
  // our list accordingly before it is returned.
  sortStocks = () => {
    let sortFunctions = {
      "Alphabetically": (a,b) => a.name.localeCompare(b.name),
      "Price": (a,b) => a.price - b.price
      }
    return this.state.stocks.sort(sortFunctions[this.state.sortBy])
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({stocks: data}))
  }

  // Inside the render method, we call the this.getFilteredStocks method
  // with the return value of the this.sortStocks function as an argument.
  // This enables us to filter the list of all our stocks after they've
  // been sorted, based on what filterType and sortBy are set to in State

  render() {
    return (
      <div>
        <SearchBar setFilter={this.setFilter} setSortBy={this.setSortBy}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.getFilteredStocks(this.sortStocks())} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeFromPortfolio={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
