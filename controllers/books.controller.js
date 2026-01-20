const booksArr = require("../models/mock-books.json");

exports.getAllBooks = function (req, res) {
  res.status(200).json(booksArr);
};

exports.getBookById = function (req, res) {
  const book = booksArr.find((book) => `${book.id}` === `${req.params.id}`);
  book?.id
    ? res.status(200).json(book)
    : res.status(400).json({ error: "No book found." });
};

exports.addNewBook = function (req, res) {
  const { title, author } = req.body;
  const books = [
    ...booksArr,
    { id: booksArr[booksArr.length - 1].id + 1, title: title, author: author },
  ];
  res.status(201).json(books);
};

// router.delete("/delete/book/:id", (req, res) => `${book.id}` !== `${req.params.id}`);
exports.deleteBookById = function (req, res) {
  res
    .status(200)
    .json(booksArr.filter((book) => `${book.id}` !== `${req.params.id}`));
};
