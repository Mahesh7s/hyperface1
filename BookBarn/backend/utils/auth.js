const jwt  = require("jsonwebtoken");
const User = require("../models/userModel");

const generateToken = (userId)=>{
	return jwt.sign({id:userId},process.env.JWT_SECRET,{
		expiresIn:process.env.JWT_EXPIRE
	})
};

const verifyToken = (token)=>{
	return jwt.verify(token,process.env,JWT_SECRET)
};
const protect = async (req,rea,next)=>{
	try{
		let token;
		if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
			token = req.headers.authorization.split(' ')[1];
		}
		if(!token) {
			return res.status(401).json({success:false,message:"Not authoriesd"});
		}

		const decoded = verifyToken(token);
		const user = await User.findById(decoded.id).select('-password');
		if(!user){
			return res.status(401).json({
				success:false,
				message:"USer not fund"
			})
		}
		req.user = user;
		next()
	}
	catch(err){
		return res.status(401).json({
				success:false,
				message:"Not authoriesws"
			})
	}
}
const authorize = (...roles)=>{
	return (req,res,next)=>{
		if(!roles.includes(req.user.role)){
			return res.status(401).json({
				success:false,
				messages:"USer is not have access"
			})
		}
	}
	next();
	
}
module.exports = {
	generateToken,verifyToken,protect,authorize
}