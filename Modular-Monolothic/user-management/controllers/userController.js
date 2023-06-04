const { user } = require("../models/user");

let create = async (Req, Res) => {
  try {
    await user.create({ ...Req.body });
    Res.status(201).json({ Msg: "User Created Successfully !" });
  } catch (err) {
    Res.status(400).json({ Msg: err.message });
  }
};
let Delete = async (Req, Res) => {
  try {
    await user.destroy({
      where: { id: Req.params.id },
    });
    Res.status(201).json({ Msg: "User Deleted Successfully !" });
  } catch (err) {
    Res.status(400).json({ Msg: err.message });
  }
};

module.exports = {
  create,
  Delete,
};
