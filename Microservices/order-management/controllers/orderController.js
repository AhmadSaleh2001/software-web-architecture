var path = require("path");
const { order } = require("../models/order");
const { orderProduct } = require("../models/orderProduct");
const { myGetFetch, myDeleteFetch } = require("../helpers/fetch");
// const { user } = require(path.resolve(
//   "./user-management",
//   "./models",
//   "user.js"
// ));
// const { product } = require(path.resolve(
//   "./product-management",
//   "./models",
//   "product.js"
// ));
// const { shoppingCart } = require(path.resolve(
//   "./cart-management",
//   "./models",
//   "shoppingCart.js"
// ));

let confirmOrder = async (Req, Res) => {
  try {
    let { currUser } = await myGetFetch(
      "http://localhost:1212/user/api/" + Req.body.userid
    );

    let { currCart } = await myGetFetch(
      "http://localhost:1214/cart/api/user/" + Req.body.userid
    );

    let totalPrice = 0;

    let currProducts = [];
    for (const item of currCart) {
      const { currProduct } = await myGetFetch(
        "http://localhost:1213/product/api/" + item.productid
      );
      currProducts.push(currProduct);
      totalPrice += currProduct.price * item.quantity;
    }
    const currOrder = await order.create({
      totalPrice,
      shippingInfo: "to palestine",
      billingInfo: "sadasdsadasd",
      userid: currUser.id,
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


    await myDeleteFetch(
      "http://localhost:1214/cart/api/userCart/" + Req.body.userid
    );

    Res.status(201).json({ Msg: "success :)" });
  } catch (err) {
    Res.status(400).json({ Msg: err.message });
  }
};

module.exports = {
  confirmOrder,
};
