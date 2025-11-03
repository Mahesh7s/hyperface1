const express = require("express");
const mongoose = require("mongoose");
 const cors = require("cors");
 require("dotenv").config();
 
 const authRoutes = require("./routes/auth");

 const bookRoutes =  require("./routes/books");
const { connectDb } = require("./config/db");

 const app = express();
 app.use(express.json());
 app.use(cors());

 connectDb();
 app.use('/api/auth',authRoutes);
 app.use('/api/books',bookRoutes);
 app.get("/test",(req,res)=>{
	res.json({
		messgae:"App is running"
	})
 })


 let PORT  = process.env.PORT || 7077

 app.listen(PORT,()=>{
	console.log(`Server is running on thePort:${PORT}`);
 })