const sequelize = require("../config/connection.js");
const { User } = require("../models");
const bcrypt= require("bcrypt");

const userData = [
    {
        email: "test@test.com",
        username: "Admin",
        password: "password"
    },
    {
        email: "test2@test.com",
        username: "Admin2",
        password: "password"
    },
    {
        email: "test3@test.com",
        username: "Admin3",
        password: "password"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
