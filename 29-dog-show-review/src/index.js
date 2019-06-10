document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("tbody");
  const form = document.querySelector("form");

  const APIURL = `http://localhost:3000/dogs`;

  function fetchDogs() {
    fetch(APIURL)
      .then(data => data.json())
      .then(dogsArray => renderDogs(dogsArray));
  }

  function renderDogs(dogsArray) {
    tableBody.innerHTML = "";

    dogsArray.forEach(dog => renderDog(dog));
  }

  function renderDog(dog) {
    const tr = document.createElement("tr");
    // 'cells'
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");

    const button = document.createElement("button");

    button.addEventListener("click", e => addEditEventListner(e, dog));

    td1.innerText = dog.name;
    td2.innerText = dog.breed;
    td3.innerText = dog.sex;
    button.innerText = "Edit dog";

    td4.append(button);
    tr.append(td1, td2, td3, td4);
    tableBody.append(tr);
  }

  function addEditEventListner(e, dog) {
    form[0].value = dog.name;
    form[1].value = dog.breed;
    form[2].value = dog.sex;

    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "id";
    hiddenInput.value = dog.id;

    if (form[4] !== undefined) {
      form[4].value = dog.id;
    } else {
      form.append(hiddenInput);
    }
  }

  // patch the dog, and update the table
  form.addEventListener("submit", patchTheDog);

  function patchTheDog(e) {
    e.preventDefault();
    // get the data from the form
    const dogData = {
      name: form[0].value,
      breed: form[1].value,
      sex: form[2].value,
      id: form[4].value
    };

    fetch(APIURL + `/${dogData.id}`, {
      method: "PATCH",
      body: JSON.stringify(dogData),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => fetchDogs());
  }

  function init() {
    fetchDogs();
  }

  init();
});
