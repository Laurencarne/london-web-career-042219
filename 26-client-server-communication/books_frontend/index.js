function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  div.dataset.id = book.id;
  book_list.appendChild(div);
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";

  div.addEventListener("click", e => {
    const parent = e.target.parentNode;

    deleteBook(parent.dataset.id).then(() => parent.remove());
  });

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  //add all elements to div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

const form = document.querySelector("form");

function postBookToTheServer(e) {
  e.preventDefault();
  const target = e.target;
  const book = {
    title: target[0].value,
    author: target[1].value,
    img: target[2].value
  };

  createBook(book)
    .then(bookData => bookData.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .then(book => addBook(book));

  target.reset();
}

form.addEventListener("submit", postBookToTheServer);

function showBooks(bookArray) {
  bookArray.map(book => {
    addBook(book);
  });
}

/**
 * Server comm section
 */

const BASE_URL = "http://localhost:3000/books";

/**
 * function that posts data to the server:
 */

function createBook(book) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  });
}

function updateBook(book, id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  });
}

function deleteBook(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
}

/**
 * app init
 *
 * this runs after the html is loaded
 */

function init() {
  fetch(BASE_URL)
    .then(data => data.json())
    .then(showBooks);
  // the more verbose version of the same call:
  // .then((books) => showBooks(books));
}

init();
