const mongoose = require("mongoose");

export const connectDb = async ()=>{
	await mongoose.connect(process.env.MONGODB_URI)
	.then(()=>console.log("MongoDb connected"))
	.catch(err=>console.log("Not connected to dB",err));
}