const { Conn } = require("../DB/DB.js");
const { DataTypes } = require("sequelize");
const { user } = require("./user");
const post = Conn.define(
  "post",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    body: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
user.hasMany(post);
module.exports = { post };
