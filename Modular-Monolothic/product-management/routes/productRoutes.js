const Router = require("express").Router();
const productController = require("../controllers/productController");

Router.post("/", productController.create);
Router.delete("/:id", productController.Delete);

module.exports = Router;
