var path = require("path");
const { Conn } = require(path.resolve("DB.js"));
const { DataTypes } = require("sequelize");

const order = Conn.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
    },
    shippingInfo: {
      type: DataTypes.STRING,
    },
    billingInfo: {
      type: DataTypes.STRING,
    },
    userid: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { order };
