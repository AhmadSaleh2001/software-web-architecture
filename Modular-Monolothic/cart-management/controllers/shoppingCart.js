var path = require("path");
const { shoppingCart } = require("../models/shoppingCart");
let userServices = require(path.resolve(
  "./user-management",
  "./services",
  "user.services.js"
));
let create = async (Req, Res) => {
  try {
    // console.log(Req.body.userId);
    await userServices.isExists(Req.body.userId);
    await shoppingCart.create({ ...Req.body });
    Res.status(201).json({
      Msg: "product added to cart Created Successfully !",
    });
  } catch (err) {
    Res.status(400).json({ Msg: err.message });
  }
};
let Delete = async (Req, Res) => {
  try {
    await shoppingCart.destroy({
      where: { id: Req.params.id },
    });
    Res.status(201).json({ Msg: "Cart Item Deleted Successfully !" });
  } catch (err) {
    Res.status(400).json({ Msg: err.message });
  }
};

module.exports = {
  create,
  Delete,
};
