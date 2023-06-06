const Router = require("express").Router();
const postController = require("../controller/postController");
Router.post("/create", postController.create);

module.exports = Router;
