const faker = require("faker");

console.log(faker.name.firstName());

module.exports = () => {
  const userCount = 21;
  const data = { users: [], locations: [] };

  for (let i = 1; i < userCount; i++) {
    let userObject = {};

    userObject = faker.helpers.userCard();
    userObject.avatar = `${faker.image.avatar()}`;
    userObject.id = i;

    data.users.push(userObject);
  }

  for (let i = 0; i < userCount; i++) {
    let locationObject = {};

    locationObject.user_id = i;

    locationObject.latLon = [
      faker.address.latitude(),
      faker.address.longitude()
    ];

    data.locations.push(locationObject);
  }
  return data;
};
