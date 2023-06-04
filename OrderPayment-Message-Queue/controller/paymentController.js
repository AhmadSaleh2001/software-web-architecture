const { putInPaymentQueue } = require("../services/Payment-Queue");
let confirmPayment = async (Req, Res) => {
  await putInPaymentQueue(Req.body);
  Res.json({ Msg: "payment successfully " });
};

module.exports = {
  confirmPayment,
};
