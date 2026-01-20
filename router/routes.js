const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books.controller");

router.get("/", booksController.getAllBooks);

router.get("/:id", booksController.getBookById);

router.post("/", booksController.addNewBook);

router.delete("/:id", booksController.deleteBookById);

module.exports = router;
