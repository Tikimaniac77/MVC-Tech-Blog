const { User } = require("../models");

const userdata = [
  {
    username: "User1",
    password: "password123",
  },
  {
    username: "User2",
    password: "password123",
  },
  {
    username: "User3",
    password: "password123",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
