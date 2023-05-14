const { Sequelize } = require("sequelize");
const Conn = new Sequelize("modular_monolothic", "root", "", {
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
