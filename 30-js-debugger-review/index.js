
// URL to the list of all Futurama Quotes on the API
const baseUrl = "http://futuramaapi.herokuapp.com/api/quotes"

// div in the index.html file to which we will append all the quote divs we create
const quotesList = document.querySelector("#quotes-list")

// function to fetch all quotes from the API and convert into JSON
getAllQuotes = () => fetch(baseUrl).then(resp => resp.json())

// clears all existing quotes from the page and renders each quote
// that we get back from the API, taking the JSON from the server as an
//argument
renderAllQuotes = quotes => {
  quotesList.innerHTML = ""
  quotes.forEach(quote => quotesList.appendChild(createQuoteDiv(quote)))
}

// creates a div containing a p tag with the quote inside, an img tag with
// a picture of the character who said the quote, set to hidden by default,
// and a button with an event listener attached to show/hide the image, filling
// each element with the appropriate string from the quote object passed in
// as an argument.
// NOTE: because the event object will be passed into the anonymous arrow function
// we have defined in our event listener below by default, and the toggleImage
// function is being run inside the scope of that arrow function, we can then
// access the event inside the toggleImage function without passing it in as an
// argument, providing we call event.preventDefault() inside the toggleImage function
createQuoteDiv = quote => {
  let quoteDiv = document.createElement('div')
  let quoteText = document.createElement('p')
  quoteText.innerText = quote.quote
  let quoteImage = document.createElement("img")
  quoteImage.src = quote.image
  quoteImage.style.display = "none"
  quoteImage.style.maxHeight = "300px"
  let quoteButton = document.createElement("button")
  quoteButton.innerText = "Show Character"
  quoteButton.addEventListener("click", () => toggleImage(quoteImage))
  quoteDiv.append(quoteText, quoteButton, quoteImage)
  return quoteDiv
}

// toggles the display css property of the image to block/none and updates
// the text inside the button as appropriate - NOTE: because we passed the image
// tag into the arrow function inside the event listener, when we call that arrow
// function it knows which image tag we are referring to, as that image tag was
// bound as the specific argument for that function call inside the arrow function.
toggleImage = (image) => {
  event.preventDefault()
  if (image.style.display == "none") {
    image.style.display = "block"
    event.target.innerText = "Hide Character"
  } else {
    image.style.display = "none"
    event.target.innerText = "Show Character"
  }
}

// function that gets all the quotes from the API and then renders each
// quote div on the page
getAndRenderAllQuotes = () => {
  return getAllQuotes().then(renderAllQuotes)
}

// runs the getAndRenderAllQuotes function when the body of the html document
// finished loading
document.body.onload = getAndRenderAllQuotes
