const mongoose = require("mongoose")
const express = require("express");
const Transaction = require("../models/transactionModel")
const addTransaction = async(req,res)=>{
	try {
		const newTransaction = await Transaction.create(req.body);
		return res.status(201).json({"Message":"Tranaction created",td:newTransaction})
	}
	catch(err){
		return res.status(401).json({error:err.message});
	}
}

module.exports = {
	addTransaction
}