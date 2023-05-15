var path = require("path");
const { shoppingCart } = require("../models/shoppingCart");
let add = async (Req, Res) => {
  try {
    await shoppingCart.create({ ...Req.body });
    Res.status(201).json({
      Msg: "product added to cart Created Successfully !",
    });
  } catch (err) {
    Res.status(400).json({ Msg: err.message });
  }
};
let mydelete = async (Req, Res) => {
  try {
    await shoppingCart.destroy({
      where: { id: Req.params.id },
    });
    Res.status(201).json({ Msg: "User Deleted Successfully !" });
  } catch (err) {
    Res.status(400).json({ Msg: err.message });
  }
};

let getCartUser = async (Req, Res) => {
  let currCart = await shoppingCart.findAll({
    where: { userId: Req.params.id },
  });
  Res.json({ currCart });
};

let deleteUserCart = async (Req, Res) => {
  try {
    await shoppingCart.destroy({
      where: { userid: Req.params.id },
    });
    Res.status(201).json({ Msg: "User Cart Deleted Successfully !" });
  } catch (err) {
    Res.status(400).json({ Msg: err.message });
  }
};

module.exports = {
  add,
  mydelete,
  getCartUser,
  deleteUserCart,
};
