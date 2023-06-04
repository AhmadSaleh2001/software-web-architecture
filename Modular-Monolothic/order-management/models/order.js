var path = require("path");
const { Conn } = require(path.resolve("DB.js"));
const { DataTypes } = require("sequelize");
const { user } = require(path.resolve(
  "./user-management",
  "./models",
  "user.js"
));
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
