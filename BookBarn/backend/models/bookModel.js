const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
	title:{
		type:String,
		required:true,
		maxlength:50
	},
	author:{
		type:String,
		required:true,

	},
	genre:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:true,
	},
	price:{
		type:Number,
		required:true,
		min:0
	},
	publishedYear:{
		type:Number,
		required:true,
		min:1000,
		max:new Date().getFullYear()
	}
	,
	createdAt:{
		type:Date,
		default:Date.now()
	},
	isbn:{
		type:String,
		required:true,
	}
	, stock:{
		type:Number,
		required:true,
		min:0
	}
},{
	timestamps:true
})

bookSchema.index({title:"text",author:"text",genre:"text"})
module.exports = mongoose.model("Book",bookSchema);