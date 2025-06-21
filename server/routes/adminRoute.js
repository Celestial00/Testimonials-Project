const express = require("express");
const adminControllers = require("../controllers/AdminController");
const Router = express.Router();

Router.post("/admin", adminControllers);


module.exports = Router;
