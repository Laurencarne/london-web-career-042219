function renderUsers(users) {
  const usersList = document.querySelector(".users-list");

  users.forEach(user => {
    const userDiv = document.createElement("div");

    // const userH3 = document.createElement("h3");
    // userH3.innerText = user.name;
    // userDiv.appendChild(userH3);

    const headerDiv = document.createElement("div");
    headerDiv.innerHTML = `<h3>${user.name}</h3>`;

    const userUl = document.createElement("ul");

    user.comments.forEach(comment => {
      const commentLi = document.createElement("li");
      commentLi.innerText = comment.body;
      userUl.appendChild(commentLi);
    });

    userDiv.appendChild(headerDiv);
    userDiv.appendChild(userUl);
    usersList.appendChild(userDiv);
  });
}

fetch("http://localhost:3000/users.json")
  .then(data => data.json())
  .then(users => renderUsers(users));
