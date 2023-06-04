const { order } = require("../models/order");
const createOrder = async (Data) => {
  return await order.create({ ...Data });
};

module.exports = {
  createOrder,
};
