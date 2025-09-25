const mongoose = require("mongoose")
const express = require("express");
const Transaction = require("../models/transactionModel")
exports.addTransaction = async(req,res)=>{
	try {
		const newTransaction = await Transaction.create(req.body);
		return res.status(201).json({"Message":"Tranaction created",td:newTransaction})
	}
	catch(err){
		return res.status(401).json({error:err.message});
	}
}

const getAllTranctions = async(req,res)=>{
	try{
            const allTranscations = await Transaction.find();
			return res.status(200).json({message:"HERE is the transavtions",all:allTranscations})
	}
	catch(err){
		return res.status(401).json({error:err.message})
	}
}

