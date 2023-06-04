let Router = require("express").Router();
const orderController = require("../controller/orderController");
Router.get("/create", orderController.create);

module.exports = Router;
