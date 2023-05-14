const { Sequelize } = require("sequelize");
const Conn = new Sequelize("users-db", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

const Connect = async () => {
  await Conn.sync({});
};

module.exports = {
  Conn,
  Connect,
};
