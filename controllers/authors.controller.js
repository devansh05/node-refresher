const db = require("../database");
const { authorsTable, booksTable } = require("../models");
const { eq, ilike, isNull } = require("drizzle-orm");

const getAllAuthors = async (req, res) => {
  const search = req.query.search;
  if (search) {
    // NON PERFORMANT SEARCH
    // const books = await db
    //   .select()
    //   .from(authorsTable)
    //   .where(ilike(booksTable.title, `%${search}%`));
    //INSTEAD USE INDEXING WITH INNER JOIN;
    const authorsList = await db
      .select({
        authorId: authorsTable.id,
        authorName: authorsTable.name, // change based on your author columns
        bookId: booksTable.id,
        bookName: booksTable.name,
      })
      .from(authorsTable)
      .innerJoin(booksTable, eq(booksTable.authorId, authorsTable.id))
      .where(ilike(booksTable.name, `%${search}%`));

    res.status(200).send(authorsList);
  } else {
    console.log(`🟡 LOG - : ${"LEFT JOIN"}`);
    const authorsList = await db
      .select()
      .from(authorsTable)
      .leftJoin(booksTable, eq(authorsTable.id, booksTable.authorId));

    const resObj = {};

    for (let i = 0; i < authorsList.length; i++) {
      const currentObj = authorsList[i];
      if (resObj[`${currentObj.id}`]) {
        const tempBooksArr = [
          ...resObj[`${currentObj.id}`].books,
          currentObj.books,
        ];
        const finalObj = {
          ...currentObj,
          books: [...tempBooksArr],
        };
        resObj[`${currentObj.id}`] = { ...finalObj };
      } else {
        resObj[`${currentObj.authors.id}`] = {
          ...currentObj,
          books: !currentObj.books ? [] : currentObj.books,
        };
      }
    }
    res.status(200).send(resObj);
  }
};

const getAuthorById = async (req, res) => {
  await db
    .select()
    .from(authorsTable)
    .where(eq(authorsTable.id, req.params.id))
    .then((author) => {
      res.send(author);
    });
};

const addNewAuthor = async (req, res) => {
  const { name, email } = req.body;
  const [addedAuthor] = await db
    .insert(authorsTable)
    .values({ name, email })
    .returning({ name: authorsTable.name, email: authorsTable.email });
  res.send(addedAuthor);
};

const deleteAuthorById = async function (req, res) {
  try {
    const [deletedBook] = await db
      .delete(booksTable)
      .where(eq(booksTable.authorId, req.query.id))
      .returning({ book: booksTable.name });

    const [deletedAuthor] = await db
      .delete(authorsTable)
      .where(eq(authorsTable.id, req.query.id))
      .returning({ author: authorsTable.name });
    res.send({
      deletdbook: deletedBook.book,
      deletedAuthor: deletedAuthor.author,
    });
  } catch (error) {
    console.error("Failed to delete Authors", error);
    res.status(500).json({ error: "Failed to delete Authors." });
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  addNewAuthor,
  deleteAuthorById,
};
