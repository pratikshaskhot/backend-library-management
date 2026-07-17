const express = require("express");

const {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/", authMiddleware, adminMiddleware, addBook);
router.get("/", authMiddleware, getAllBooks);
router.get("/:id", authMiddleware, getBookById);
router.put("/:id", authMiddleware, adminMiddleware, updateBook);
router.delete("/:id", authMiddleware, adminMiddleware, deleteBook);

module.exports = router;