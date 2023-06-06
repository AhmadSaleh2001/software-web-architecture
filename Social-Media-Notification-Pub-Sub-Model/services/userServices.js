const { user } = require("../models/user");
const { user_follow } = require("../models/user_follow");

let create = async (Data) => {
  return await user.create({ ...Data });
};
let follow = async (Data) => {
  return await user_follow.create({ ...Data });
};
let getWhoIFollow = async (id) => {
  return await user_follow.findAll({
    where: {
      userid: id,
    },
  });
};
module.exports = {
  create,
  follow,
  getWhoIFollow,
};
