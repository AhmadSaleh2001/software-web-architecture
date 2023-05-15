const Router = require("express").Router();
const userController = require("../controllers/userController");

Router.post("/", userController.add);
Router.delete("/:id", userController.mydelete);
Router.get("/api/:id", userController.getById);

module.exports = Router;
