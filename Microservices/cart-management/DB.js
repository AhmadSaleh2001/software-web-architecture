const { Sequelize } = require("sequelize");
const Conn = new Sequelize("carts-db", "root", "", {
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
