const { Conn } = require("../helper/DB");
const { DataTypes } = require("sequelize");
const { user } = require("./user");
const { product } = require("./product");
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
