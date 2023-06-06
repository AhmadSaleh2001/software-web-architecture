const { putInPostQueue } = require("../services/Posts-Queue");
let create = async (Req, Res) => {
  await putInPostQueue(Req.body);

  Res.json({ Msg: "Post Created Successfully !" });
};

module.exports = {
  create,
};
