const faker = require("faker");

console.log(faker.name.firstName());

module.exports = () => {
  const userCount = 21;
  const data = { users: [] };

  for (let i = 1; i < userCount; i++) {
    let userObject = {};

    userObject = faker.helpers.userCard();
    userObject.avatar = `${faker.image.avatar()}`;
    userObject.id = i;

    data.users.push(userObject);
  }

  return data;
};
