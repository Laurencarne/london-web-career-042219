const book_list = document.querySelector("#book-list");

function createBookCardAndAppendToTheDom(book) {
  const div = document.createElement("div");
  div.className = "card";
  const img = document.createElement("img");
  img.src = book.img;
  const h3 = document.createElement("h3");
  h3.textContent = book.title;
  const p = document.createElement("p");
  p.textContent = book.author;
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
  book_list.appendChild(div);

  div.addEventListener("click", function removeElement(e) {
    e.target.parentNode.remove();
  });
}

const form = document.querySelector("form");

function addBook(e) {
  e.preventDefault();
  const target = e.target;
  createBookCardAndAppendToTheDom({
    title: target[0].value,
    author: target[1].value,
    img: target[2].value
  });
  target.reset();
}

form.addEventListener("submit", addBook);

books.forEach(createBookCardAndAppendToTheDom);
