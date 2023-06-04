const { order } = require("../models/order");
const { payment } = require("../models/payment");
const confirmOrder = async (orderId) => {
  let Ans = await payment.create({ orderId });
  await order.update(
    {
      status: true,
    },
    {
      where: { id: orderId },
    }
  );
  return Ans;
};

module.exports = {
  confirmOrder,
};
