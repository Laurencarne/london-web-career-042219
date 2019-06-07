const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// querySelectors we added

const addToyForm = document.querySelector(".add-toy-form")
const toyNameInput = document.querySelector("input[name='name']")
const toyImageInput = document.querySelector("input[name='image']")
const toyCollection = document.querySelector("#toy-collection")

// base Url that forms basis of every request
const baseURL = "http://localhost:3000/toys/"


//event listener to show/hide the form and add/remove event listener
addBtn.addEventListener('click', () => {
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    addToyForm.addEventListener("submit", postToyToServer)
  } else {
    toyForm.style.display = 'none'
    addToyForm.removeEventListener("submit", postToyToServer)
  }
})

// function to get all toys from server and convert into json
// NOTE - if you want to chain .then onto this function later,
// as we do, you must return it!

fetchToys = () => {
  return fetch(baseURL)
  .then(response => response.json())
  // .then(console.log)
}

// To be able to use appendChild to add elements to the page:
// You need to create an element using createElement and
// then assign it to a variable

// The function below does this, then adds the rest of the
// elements to the innerHTML property of the div.
// It then returns the main element (the div)

// If we used this function, We would then be able to
// replace line 95 (inside the fetchAndRenderToys function)
// with the following:
// toyCollection.appendChild(createElementThenAddHTML(toy))

// createElementThenAddHTML = (toy) => {
//   let div = document.createElement("div")
//   div.className = "card"
//   div.innerHTML = `<h2>${toy.name}</h2>
//       <img src=${toy.image} class="toy-avatar" />
//       <p>${toy.likes} Likes </p>
//       <button data-id="${toy.id}" class="like-btn">Like <3</button>`
//   return div
// }

// function to return a string of HTML for each individual toy ready to add to the page. This is not the
// same as creating an actual HTML element and it's child elements, as we did above

createCard = (toy) => {
  return `<div class="card">
    <h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p class="likes-${toy.id}">${toy.likes} Likes </p>
    <button data-id="${toy.id}" class="like-btn">Like <3</button>
  </div>`
}

// function to select all the like buttons after they've
// been added to the page, then iterate over them to
// add an event listener to each one

addLikeEventListeners = () => {
  let likeButtons = document.querySelectorAll(".like-btn")
  likeButtons.forEach(likeButton => {
    likeButton.addEventListener("click", patchLikesToServer)
  })
}

//function that combines out helper functions to
// fetch all the toys, render them on the server, then add
// the event listeners to the like buttons
// This is the function we want to run when first loading the page

fetchAndRenderToys = () => {
  fetchToys()
  .then(toys => {
    // line 81 below removes existing toy cards to avoid duplicates
    toyCollection.innerHTML = ""
    toys.forEach(toy => {
      toyCollection.innerHTML += createCard(toy)
    })
    addLikeEventListeners()
  })
}

// function to find the like element for our toy,
// parse the number of likes from the elements innertext,
// then increase the likes by one and then return
// the updated number of likes

increaseLikes = (event) => {
  let toyLikesElement = document.querySelector(`.likes-${event.target.dataset.id}`)
  let likes = parseInt(toyLikesElement.innerText)
  likes ++
  return likes
}

// function to assign the return value of increaseLikes
// to a variable, send the increased likes to the Server
// then fetch and render all the toys again

patchLikesToServer = (event) => {
  event.preventDefault()
  let toyLikes = increaseLikes(event)
  fetch(baseURL + event.target.dataset.id, {
    method: "PATCH",
    headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
    body: JSON.stringify({
      "likes": toyLikes
    })
  })
  .then(fetchAndRenderToys)
}

// function to post the new toy information to the
// server, then fetch and render all the toys again

postToyToServer = (event) => {
  event.preventDefault()
  fetch(baseURL, {
    method: "POST",
    headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
      body: JSON.stringify({
      name: toyNameInput.value,
      image: toyImageInput.value,
      likes: 0
    })
  })
  .then(() => {
    // removes values from the form once it has been submitted
    addToyForm.reset()
    fetchAndRenderToys()
  })
}

// function that runs the function to fetch
// and then render the toys after the inital
// body html has finished loading

document.body.onload = fetchAndRenderToys
