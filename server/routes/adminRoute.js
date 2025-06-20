const express = require("express");
const adminController = require("../controllers/AdminController");
const Router = express.Router();

Router.get("/", adminController);

module.exports = Router;
