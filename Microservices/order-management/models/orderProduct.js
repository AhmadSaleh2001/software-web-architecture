var path = require("path");
const { Conn } = require(path.resolve("DB.js"));
const { DataTypes } = require("sequelize");
const { order } = require("./order");
const orderProduct = Conn.define(
  "orderProduct",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    orderid: {
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

module.exports = { orderProduct };
