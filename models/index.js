const User = require("./User.js");
const Kitty = require("./Kitty.js");

// User - Kitty / User relations
User.hasMany(Kitty, {
    foreignKey: "userId",
    as: "kitty_owner",
    onDelete: "CASCADE",
});

Kitty.belongsTo(User, {
    foreignKey: "userId",
    as: "kitty_owner",
});

module.exports = { User, Kitty };
