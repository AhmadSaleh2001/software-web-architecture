var path = require("path");
const { Conn } = require(path.resolve("DB.js"));
const { DataTypes } = require("sequelize");
const { product } = require(path.resolve(
  "./product-management",
  "./models",
  "product.js"
));
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
