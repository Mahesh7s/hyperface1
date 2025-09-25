const express = require("express");
const mongoose = require("mongoose");
const { default: tRouter } = require("./routes/transactionRoutes");
const app = express();
app.use(express.json());
app.use("/tranactions",tRouter);

mongoose.connect("mongodb://127.0.0.1:27017/hyperfaceexpenses")
.then(()=>{
	console.log("Database Connected")
}).catch(err=>console.log("Failed to connect DB"));
app.use("/test",(req,res)=>{
	return res.status(200).json("Test Route is Workking");
})

app.listen(3000,()=>{
	console.log("Server is running on the PORT 3000")
});