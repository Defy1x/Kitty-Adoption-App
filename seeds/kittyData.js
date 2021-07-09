const sequelize = require("../config/connection.js");
const { Kitty } = require("../models");

const kittyData = [
    {
        userId: 1,
        kittyName: "King Henry",
        kittyStory: "This cat thinks he is a king.",
        kittyPicture: "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
        kittyBreed: "Scottish Fold",
        kittyWeight: "Slim",
        kittyColor: "White",
        kittyLocation: "Chicago",
        kittyPersonality: "Playful",
        kittyAge: 3,
        kittyKids: true,
        kittyPets: false,
    },
    {
        userId: 2,
        kittyName: "Felix",
        kittyStory: "Felix is a shy guy looking for a new home, he is good with kids and other animals.",
        kittyPicture: "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
        kittyBreed: "Short Hair",
        kittyWeight: "Average",
        kittyColor: "Black",
        kittyLocation: "Atlanta",
        kittyPersonality: "Shy",
        kittyAge: 6,
        kittyKids: true,
        kittyPets: true,
    },
    {
        userId: 3,
        kittyName: "Wesker",
        kittyStory: "Wesker secretly wants to kill you at night and steal all your cash. Hide your girlfriend / wife too.",
        kittyPicture: "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
        kittyBreed: "Unknown",
        kittyWeight: "Chonky",
        kittyColor: "White / Brown",
        kittyLocation: "New York",
        kittyPersonality: "Asshole",
        kittyAge: 7,
        kittyKids: false,
        kittyPets: false,
    },
    {
        userId: 1,
        kittyName: "Robert",
        kittyStory: "Robert secretly wants to kill you at night and steal all your cash. Hide your girlfriend / wife too.",
        kittyPicture: "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
        kittyBreed: "Unknown",
        kittyWeight: "Chonky",
        kittyColor: "White / Brown",
        kittyLocation: "Los Angeles",
        kittyPersonality: "Asshole",
        kittyAge: 7,
        kittyKids: false,
        kittyPets: false,
    },
    {
        userId: 1,
        kittyName: "Furball",
        kittyStory: "Furball secretly wants to kill you at night and steal all your cash. Hide your girlfriend / wife too.",
        kittyPicture: "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
        kittyBreed: "Unknown",
        kittyWeight: "Chonky",
        kittyColor: "White / Brown",
        kittyLocation: "Atlanta",
        kittyPersonality: "Asshole",
        kittyAge: 7,
        kittyKids: false,
        kittyPets: false,
    }
]

const seedKitty = () => Kitty.bulkCreate(kittyData);

module.exports = seedKitty;
