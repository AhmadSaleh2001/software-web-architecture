const { Conn } = require("../DB/DB.js");
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
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = { order };
