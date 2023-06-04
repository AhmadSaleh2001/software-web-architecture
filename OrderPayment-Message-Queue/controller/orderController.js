const orderServices = require("../services/orderServices");
const { putInOrderQueue } = require("../services/Order-Queue");
let create = async (Req, Res) => {
  await putInOrderQueue(Req.body);
  Res.json({ Msg: "order created successfully with pending status" });
};

module.exports = {
  create,
};
