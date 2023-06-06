const userServices = require("../services/userServices");
let create = async (Req, Res) => {
  await userServices.create({ ...Req.body });

  Res.json({ Msg: "User Created Successfully !" });
};
let follow = async (Req, Res) => {
  await userServices.follow({ ...Req.body });

  Res.json({ Msg: "User followed Successfully !" });
};
let getWhoIFollow = async (Req, Res) => {
  let IDs = await userServices.getWhoIFollow(Req.params.id);

  return IDs;
};

module.exports = {
  create,
  follow,
  getWhoIFollow,
};
