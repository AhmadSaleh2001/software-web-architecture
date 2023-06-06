const { Conn } = require("../DB/DB.js");
const { DataTypes } = require("sequelize");
const user = Conn.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = { user };
