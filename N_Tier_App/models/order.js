const { Conn } = require("../helper/DB");
const { DataTypes } = require("sequelize");
const { user } = require("./user");
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
  },
  {
    timestamps: true,
  }
);
user.hasMany(order, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
module.exports = { order };
