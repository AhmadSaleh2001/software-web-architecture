const { order } = require("../models/order");
const { orderProduct } = require("../models/orderProduct");
const { user } = require("../models/user");
const { product } = require("../models/product");
const { shoppingCart } = require("../models/shoppingCart");

let confirmOrder = async (Req, Res) => {
  try {
    let currUser = await user.findByPk(Req.body.userid);
    let currCart = await shoppingCart.findAll({
      where: { userId: currUser.id },
    });
    // console.log(currUser);
    let totalPrice = 0;

    for (const item of currCart) {
      const currProduct = await product.findByPk(item.productId);
      totalPrice += currProduct.price * item.quantity;
    }
    const currOrder = await order.create({
      totalPrice,
      shippingInfo: "to palestine",
      billingInfo: "sadasdsadasd",
      userId: currUser.id,
    });

    let BatchInsert = []; // batch insert will reduce connections consume rather insert one by one
    for (const item of currCart) {
      BatchInsert.push({
        orderId: currOrder.id,
        productId: item.productId,
        quantity: item.quantity,
      });
    }
    await orderProduct.bulkCreate(BatchInsert);

    await shoppingCart.destroy({
      where: {
        userId: currUser.id,
      },
    });

    Res.status(201).json({ Msg: "success :)" });
  } catch (err) {
    Res.status(400).json({ Msg: err.message });
  }
};

module.exports = {
  confirmOrder,
};
