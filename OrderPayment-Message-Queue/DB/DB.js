const { Sequelize } = require("sequelize");
const Conn = new Sequelize("order_payment_message_queue", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

const Connect = async () => {
  await Conn.sync({ force: true });
  // await Conn.sync({});
};

module.exports = {
  Conn,
  Connect,
};
