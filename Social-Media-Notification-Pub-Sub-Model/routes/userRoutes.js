const Router = require("express").Router();
const userController = require("../controller/userController");
Router.post("/create", userController.create);
Router.post("/follow", userController.follow);

module.exports = Router;
