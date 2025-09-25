const express = require("express");
const tRouter = express.Router()
const transactionController = require("../controllers/transactionController")
tRouter.post("/add",transactionController.addTransaction);
module.exports=tRouter;