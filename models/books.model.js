const { pgTable, serial, varchar, uuid } = require("drizzle-orm/pg-core");
const {authorsTable} = require('./authors.model')

const booksTable = pgTable("books", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 80 }).notNull(),
  authorId: uuid().references(() => authorsTable.id).notNull()
});

module.exports = { booksTable };
