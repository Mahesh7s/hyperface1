const User = require("../models/userModel");
const {generateToken} = require("../utils/auth");
const register = async (req,res)=>{
	try{
		const {username,email,password,role} = req.body;
		let existing = await User.findOne({$or:[{email},{username}]});
		if(existing){
			return res.status(401).json({
				success:false,
				message:"USer is alreadu exists";
			})
		}

		let user = await User.create({
			username,email,password,role
		});
		const token = generateToken(user._id);

		res.status(201).json({
			success:true,
			token,
			user:{
				id:user._id,
				email:user.email,
				username:user.username,
				role:user.role
			}
		})
	}
	catch(err){
		return res.status(401).json({
			success:false,
			message:"Error in cretaing user",
			error:err.message
		})
	}
}

const login = async(req,res)=>{
	try{
		const {email,password} =  req.body;
		if(!email || !password) {
			return res.status(400).json({
				success:false,
				message:"Email and PAssword is not valid"
			})

		}

		const user = await User.findOne({email}).select('+password');
		if(!user || !(await user.comparePassword(password))){
			res.status(401).json({
				success:false,
				message:"Invalid credentials",
			})
		}

		const token = generateToken(user._id);
		res.status(200).json({
			success:true,token,
			user:{
				id:user._id,
				email:user.email,
				username:user.username,
				role:user.role
			}
		})
	}
	catch(err){
		res.status(500).json({
			success:false,
			message:"Error in logging the user",
			error:err.message
		})
	}
}


const getMe = async(req,res)=>{
	try {
		const user =await User.findById(req.user.id)
       res.status(200).json({
		success:true,
		user:{
				id:user._id,
				email:user.email,
				username:user.username,
				role:user.role
			}
	   })

	}
	catch(err){
			res.status(500).json({
			success:false,
			message:"Error in getting  user",
			error:err.message
		})
	}
}

module.exports = {
	register,login,getMe
}