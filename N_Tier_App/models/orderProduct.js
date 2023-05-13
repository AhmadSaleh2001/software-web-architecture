const { Conn } = require("../helper/DB");
const { DataTypes } = require("sequelize");
const { product } = require("./product");
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
  },
  {
    timestamps: true,
  }
);
product.belongsToMany(order, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  through: orderProduct,
});
order.belongsToMany(product, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  through: orderProduct,
});
module.exports = { orderProduct };
