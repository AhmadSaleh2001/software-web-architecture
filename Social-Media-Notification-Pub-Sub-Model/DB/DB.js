const { Sequelize } = require("sequelize");
const Conn = new Sequelize(
  "social_media_notification_pub_sub_model",
  "root",
  "",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

const Connect = async () => {
  // await Conn.sync({ force: true });
  await Conn.sync({});
};

module.exports = {
  Conn,
  Connect,
};
