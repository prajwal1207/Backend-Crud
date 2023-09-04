const express = require("express");
const controller = require("../controller/user");
const Router = express.Router();

Router.get("/:id", controller.getSingleUser);
Router.get("/", controller.getAllUser);
Router.post("/add-user", controller.addUser);
Router.delete("/delete-user/:id", controller.deleteUser);
Router.patch("/update-user/:id", controller.updateUser);

module.exports = Router;
