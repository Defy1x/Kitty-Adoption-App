const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Kitty extends Model {};

Kitty.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },
          kittyName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
          kittyStory: {
          type: DataTypes.TEXT,
          allowNull: true,
          defaultValue: "N/A"
        },
          kittyPicture: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "N/A"
          },
          kittyBreed: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "N/A"
          },
          kittyGender: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "N/A"
          },
          kittyWeight: {
              type: DataTypes.TEXT,
              allowNull: true,
              defaultValue: "N/A"
          },
          kittyColor: {
              type: DataTypes.TEXT,
              allowNull: true,
              defaultValue: "N/A"
            },
          kittyLocation: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "N/A"
          },
          kittyPersonality: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "N/A"
          },
          kittyAge:{
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
          },
          kittyKids:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "N/A"
          },
          kittyPets:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "N/A"
          }
      },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "kitty"
    }
);

module.exports = Kitty;
