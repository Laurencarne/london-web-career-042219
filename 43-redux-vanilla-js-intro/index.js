// Redux has been imported in a script tag on line 6 of the html file, meaning
// its functions are now available to us in this JS file.

const counterText = document.querySelector("#counter")
const increaseBtn = document.querySelector("#increase")
const decreaseBtn = document.querySelector("#decrease")

// initial state which will be set in the store
const initialState = { counter: 0 }

// reducer function which takes argument of current state and an action object to generate the new state. It does
// this by checking what the type property of the action object we've passed in is (inside the switch statement) then
// returns a new object which will become the new state, or the current state if the action type is not recognised
// by the reducer
// NOTE: the state argument takes a default value of our initialState constant, which is returned to set the
// state when the reducer is first run, which happens when it is passed as an argument to the Redux.createStore()
// function
counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return ({...state, counter: state.counter + 1})
    case "DECREASE":
      return ({...state, counter: state.counter - 1})
    default:
      return state
  }
}

// createStore creates our store which will contain the reducer function and state, which it defines by
// running the reducer function when it is initialized
const store = Redux.createStore(counterReducer)

// function which sets value of counter on the HTML page, using the getState() function to
// retrive the current state and then calling the .counter property of it.
updateCounter = () => counterText.innerText = store.getState().counter

// event listeners trigger the store.dispatch() function with an argument of an action, which calls the reducer function
// inside our store with the arguments of state and the action object passed in as the argument of the dispatch function
// and returns a new state object
increaseBtn.addEventListener("click", () => store.dispatch({type: "INCREASE"}))

decreaseBtn.addEventListener("click", () => store.dispatch({type: "DECREASE"}))

// the updateCounter function is passed as an argument to the subscribe function, so that every time the state inside the
// store changes the updateCounter function runs, which will then pass the new value of counter to the html page
store.subscribe(updateCounter)

// Updates the value of the counter on the page to the current value within state inside the store
// NOTE: this function call works when we initially load the page because we have set state to the initialState when we
// created the store, so it is already available to us to take the counter value from.
updateCounter()
