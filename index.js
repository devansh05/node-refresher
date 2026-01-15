const express = require("express");
const booksArr = require("./mock-books.json");
const app = express();

//middleware to extract request body in json
app.use(express.json());

app.get("/books", (req, res) => {
  res.status(200).json(booksArr);
});

app.get("/books/:id", (req, res) => {
  const book = booksArr.find((book) => `${book.id}` === `${req.params.id}`);
  book?.id
    ? res.status(200).json(book)
    : res.status(400).json({ error: "No book found." });
});

app.post("/book", (req, res) => {
  const { title, author } = req.body;
  const books = [
    ...booksArr,
    { id: booksArr[booksArr.length - 1].id + 1, title: title, author: author },
  ];

  res.status(201).json(books);
});

// app.delete("/delete/book/:id", (req, res) => `${book.id}` !== `${req.params.id}`);
app.delete("/delete/books/:id", (req, res) => {
  res
    .status(200)
    .json(booksArr.filter((book) => `${book.id}` !== `${req.params.id}`));
});

app.listen(3000, console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - LISTENING ON 3000"));
