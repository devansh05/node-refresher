const db = require("../database");
const { eq } = require("drizzle-orm");
const { uuid } = require("drizzle-orm/pg-core");

const { booksTable, authorsTable } = require("../models/index.js");

const getAllBooks = async function (req, res) {
  try {
    const books = await db.select().from(booksTable);
    return res.json(books);
  } catch (error) {
    console.error("Failed to fetch books", error.message);
    res.status(500).json({ error: "Failed to fetch books." + error.message });
    return;
  }
};

const getBookById = async function (req, res) {
  try {
    const result = await db
      .select()
      .from(booksTable)
      .innerJoin(authorsTable, eq(booksTable.authorId, authorsTable.id))
      .where(eq(booksTable.id, req.params.id));

    const [book] = result;

    res.json(book);
  } catch (error) {
    console.error("Failed to fetch book", error);
    res.status(500).json({ error: "Failed to fetch book." });
  }
};

const addNewBook = async (req, res) => {
  const { email, name, authorId } = req.body;

  const [authorFound] = await db
    .select()
    .from(authorsTable)
    .where(eq(authorsTable.id, authorId));

  if (authorFound.id) {
    const [bookAdded] = await db
      .insert(booksTable)
      .values({ name: name, email: email, authorId: authorId })
      .returning({ name: booksTable.name });
    return res.send({ book: bookAdded });
  }
  res.status(402).send("No author found");
};

const deleteBookById = async function (req, res) {
  try {
    const [deletedBook] = await db
      .delete(booksTable)
      .where(eq(booksTable.id, req.params.id))
      .returning({ deletedBook: booksTable.id });

    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found." });
    }

    res.status(200).json(deletedBook);
  } catch (error) {
    console.error("Failed to delete book", error);
    res.status(500).json({ error: "Failed to delete book." });
  }
};

module.exports = { getAllBooks, getBookById, addNewBook, deleteBookById };
