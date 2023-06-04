const { Conn } = require("../DB/DB.js");
const { DataTypes } = require("sequelize");
const { order } = require("./order.js");
const payment = Conn.define(
  "payment",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    timestamps: true,
  }
);
order.hasOne(payment);
module.exports = { payment };
