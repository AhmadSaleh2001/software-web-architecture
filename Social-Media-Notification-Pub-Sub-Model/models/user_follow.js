const { Conn } = require("../DB/DB.js");
const { DataTypes } = require("sequelize");
const user_follow = Conn.define(
  "user_follow",
  {
    userid: {
      type: DataTypes.INTEGER,
    },
    user_follow: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { user_follow };
