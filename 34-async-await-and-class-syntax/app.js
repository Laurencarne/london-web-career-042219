const profileList = document.querySelector("#profile-list");

class UserCard {
  constructor(userObj) {
    this.name = userObj.name;
    this.email = userObj.email;
    this.avatar = userObj.avatar;
    this.id = userObj.id;
  }

  delete = id => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(this.deleteUserDomNode());
  };

  deleteUserDomNode = () => {
    const domNode = document.querySelector(`div[data-id="${this.id}"`);
    domNode.remove();
    const remainingNodes = document.querySelectorAll(".user-card");
    if (remainingNodes.length < 1) {
      this.renderNoUsersMessage();
    }
  };

  renderNoUsersMessage = () => {
    profileList.innerHTML = "no users to show!";
  };

  render = () => {
    const userCardDiv = document.createElement("div");
    const avatar = document.createElement("img");
    const nameH2 = document.createElement("h2");
    const emailH3 = document.createElement("h3");
    const deleteButton = document.createElement("button");

    userCardDiv.dataset.id = this.id;
    avatar.src = this.avatar;
    nameH2.innerText = this.name;
    emailH3.innerHTML = this.email;
    deleteButton.innerText = "x";
    deleteButton.style.display = "block";
    deleteButton.style.marginLeft = "40px";

    deleteButton.addEventListener("click", e => {
      this.delete(this.id);
    });

    userCardDiv.classList.add("user-card");
    userCardDiv.append(deleteButton, avatar, nameH2, emailH3);
    profileList.append(userCardDiv);
  };
}

renderAllUserCards = users => {
  profileList.innerHTML = "";
  users.forEach(user => {
    const userCard = new UserCard(user);
    userCard.render();
  });
};

// ----------------------------------------------------------------------------

const getUsers = () =>
  fetch("http://localhost:3000/users")
    .then(d => d.json())
    .then(users => {
      renderAllUserCards(users);
    });

// ----------------------------------------------------------------------------

// const getUsers = async () => {
//   const userData = await fetch("http://localhost:3000/users");
//   const userDataJSON = await userData.json();
//   renderAllUserCards(userDataJSON);
// };

// ----------------------------------------------------------------------------
// what about when there is no more users?

// const getUsers = () =>
//   fetch("http://localhost:3000/users")
//     .then(d => d.json())
//     .then(users => {
//       if (users.length < 1) {
//         console.log("no users");
//       } else {
//         renderAllUserCards(users);
//       }
//     });

// // async-await version

// const getUsers = async () => {
//   const data = await fetch("http://localhost:3000/users");
//   const dataJSON = await data.json();
//   if (dataJSON.length < 1) {
//     const userCardInstance = new UserCard({});
//     userCardInstance.renderNoUsersMessage();
//   } else {
//     renderAllUserCards(dataJSON);
//   }
// };

getUsers();
