const Router = require("express").Router();
const userController = require("../controllers/userController");

Router.post("/", userController.create);
Router.delete("/:id", userController.Delete);

module.exports = Router;
