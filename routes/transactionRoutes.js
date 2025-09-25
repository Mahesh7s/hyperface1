const express = require("express");
const { addTransaction } = require("../controllers/transactionController");
const tRouter= express.Router();

tRouter.post("/add",addTransaction);

module.exports=tRouter;