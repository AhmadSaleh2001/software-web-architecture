var path = require("path");
const { Conn } = require(path.resolve("DB.js"));
const { DataTypes } = require("sequelize");
const { user } = require(path.resolve(
  "./user-management",
  "./models",
  "user.js"
));

const { product } = require(path.resolve(
  "./product-management",
  "./models",
  "product.js"
));
const shoppingCart = Conn.define(
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
  },
  {
    timestamps: true,
  }
);

shoppingCart.belongsTo(user, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
shoppingCart.belongsTo(product, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = { shoppingCart };
