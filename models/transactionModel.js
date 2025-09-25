const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
	type:{type:String,enum:["Credit","Debit"], required:true},
	amount:{type:Number,required:true,min:0},
	category:{type:String,enum:["Food","Transport","Shopping","Salary"],default:"Salary"},
	description:{type:String}
})

  const Transactions = mongoose.model("Transactions",transactionSchema);
  module.exports = Transactions;
