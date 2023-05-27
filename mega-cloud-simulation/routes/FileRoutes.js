const Router = require("express").Router();
const FileSystemController = require("../controllers/FileSystem");
const { upload } = require("../helpers/Multer");

Router.get("/:id", FileSystemController.get);
Router.post("/createfolder/:parentid", FileSystemController.createfolder);
Router.post(
  "/createfile/:parentid",
  upload.single("image"),
  FileSystemController.createfile
);

module.exports = Router;
