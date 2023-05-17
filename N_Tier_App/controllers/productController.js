const { product } = require("../models/product");

let create = async (Req, Res) => {
  try {
    await product.create({ ...Req.body });
    Res.status(201).json({ Msg: "product Created Successfully !" });
  } catch (err) {
    Res.status(400).json({ Msg: err.message });
  }
};
let Delete = async (Req, Res) => {
  try {
    await product.destroy({
      where: { id: Req.params.id },
    });
    Res.status(201).json({ Msg: "product Deleted Successfully !" });
  } catch (err) {
    Res.status(400).json({ Msg: err.message });
  }
};

module.exports = {
  create,
  Delete,
};
