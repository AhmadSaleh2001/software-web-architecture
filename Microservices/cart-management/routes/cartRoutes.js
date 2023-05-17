const Router = require("express").Router();
const shoppingCartController = require("../controllers/shoppingCart");

Router.post("/", shoppingCartController.create);
Router.delete("/:id", shoppingCartController.Delete);
Router.get("/api/user/:id", shoppingCartController.getCartUser);
Router.delete("/api/userCart/:id", shoppingCartController.deleteUserCart);

module.exports = Router;
