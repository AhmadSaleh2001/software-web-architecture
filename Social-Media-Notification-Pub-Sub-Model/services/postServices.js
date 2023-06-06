const { post } = require("../models/post");

let create = async (Data) => {
  return await post.create({ ...Data });
};
module.exports = {
  create,
};
