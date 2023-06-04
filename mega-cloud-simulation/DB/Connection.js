const mysql = require("mysql2/promise");

let Connect = async () => {
  return await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "filesystem",
  });
};
module.exports = {
  Connect,
};
