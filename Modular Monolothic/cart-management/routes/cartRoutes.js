const Router = require("express").Router();
const shoppingCartController = require("../controllers/shoppingCart");

Router.post("/", shoppingCartController.add);
Router.delete("/:id", shoppingCartController.mydelete);

module.exports = Router;
