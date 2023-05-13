const { user } = require("../models/user");
let isExists = async (id) => {
  let User = await user.findByPk(id);
  if (!User) throw new Error("user not found !");
};

module.exports = {
  isExists,
};
