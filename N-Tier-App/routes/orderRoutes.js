const Router = require("express").Router();
const orderController = require("../controllers/orderController");
Router.post("/", orderController.confirmOrder);

module.exports = Router;
