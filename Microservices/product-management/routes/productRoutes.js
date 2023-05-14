const Router = require("express").Router();
const productController = require("../controllers/productController");

Router.post("/", productController.add);
Router.delete("/:id", productController.mydelete);

module.exports = Router;
