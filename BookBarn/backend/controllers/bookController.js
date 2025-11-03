const Book = require("../models/bookModel");
const getAllBooks = async(req,res)=>{
	try{
		const page = parseInt(req.query.page)||1;
		const limit = parseInt(req.query.limit) || 10;
		const skip = (page-1)*limit;
		const {author,genre} = req.query;
		const filter ={

		}
		
	}
	catch(err){

	}
}

const createBook = async(req,res)=>{
	try{
		const bookData  =  req.body;
		const existingBook  = await Book.findOne({isbn:bookData.isbn});
		if(existingBook) {
			return res.status(400).json({
				success:false,
				message:"Book is exist alerady"
			})
		}
		const book = await Book.create(bookData);
		res.status(201).json({
			success:true,
			messgae:"Book created Successfully",
			data:book
		})
	}
	catch(err){
		res.status(500).json({
			success:false,
			messgae:"Error occured in creating the book",
			error:err.message
		})
	}


}

const updatebook = async(req,res)=>{
	try{
		const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        if(!book){
			return res.status(404).json({
				success:false,
				message:"Book not found"
			})
		}
          res.status(200).json({
			success:true,
		message:"Book Updated",
		data:book
		  })
	}
	catch(err){
		res.status(500).json({
			success:false,
			messgae:"Error occured in updatting the book",
			error:err.message
		})
	}
}

const deleteBook = async(req,res)=>{
		try{
		const book = await Book.findByIdAndDelete(req.params.id);
	if(!book){
		return res.status(404).json({
				success:false,
				message:"Book not found"
			})
	}
	res.status(200).json({
			success:true,
		message:"Book deleted",
	})
	}
	catch(err){
		res.status(500).json({
			success:false,
			messgae:"Error occured in deleting the book",
			error:err.message
		})
	}

}

module.exports = {
	createBook,updatebook,deleteBook
}
