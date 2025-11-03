const express = require("express");
const {createBook,updatebook,deleteBook} = require("../controllers/bookController");
const {protect,authorize} = require("../utils/auth");
const router = express.Router();

router.post("/",protect,authorize('admin'),createBook)
router.put("/:id",protect,authorize('admin'),updatebook)
router.delete("/:id",protect,authorize('admin'),deleteBook)

module.exports = router;
