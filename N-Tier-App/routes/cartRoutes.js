const Router = require("express").Router();
const shoppingCartController = require("../controllers/shoppingCart");

Router.post("/", shoppingCartController.create);
Router.delete("/:id", shoppingCartController.Delete);

module.exports = Router;
