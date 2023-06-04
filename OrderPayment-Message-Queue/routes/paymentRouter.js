let Router = require("express").Router();
const paymentController = require("../controller/paymentController");
Router.get("/confirm", paymentController.confirmPayment);
module.exports = Router;
