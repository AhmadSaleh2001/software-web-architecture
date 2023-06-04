const { Connect, connection } = require("../DB/Connection");
const services = require("../services/service");
const get = async (Req, Res) => {
  let { id } = Req.params;

  const { rows, currPath } = await services.getFolder(id);

  Res.render("main.ejs", { childs: rows, currPath });
};

let createfolder = async (Req, Res) => {
  await services.createFolder(Req.body.foldername, Req.params.parentid);
  Res.redirect("/fs/" + Req.params.parentid);
};

let createfile = async (Req, Res) => {
  await services.createFile(Req.file.filename, Req.params.parentid);
  Res.redirect("/fs/" + Req.params.parentid);
};

module.exports = {
  get,
  createfolder,
  createfile,
};
