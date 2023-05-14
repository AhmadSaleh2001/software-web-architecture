var path = require("path");
const { Conn } = require(path.resolve("DB.js"));
const { DataTypes } = require("sequelize");
shoppingCart = Conn.define(
  "shoppingCart",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
    },
    productid: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = { shoppingCart };
