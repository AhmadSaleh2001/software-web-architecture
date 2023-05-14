const Router = require("express").Router();
const userController = require("../controllers/userController");

Router.post("/", userController.add);
Router.delete("/:id", userController.mydelete);

module.exports = Router;
