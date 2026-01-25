const { pgTable, text, varchar, uuid, index } = require("drizzle-orm/pg-core");
const { sql } = require("drizzle-orm");
const { authorsTable } = require("./authors.model");

const booksTable = pgTable(
  "books",
  {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar({ length: 80 }).notNull(),
    email: varchar({ length: 100 }),
    authorId: uuid()
      .references(() => authorsTable.id)
      .notNull(),
  },
  (table) => ({
    bookNameIdx: index("books_name_idx").using(
      "gin",
      sql`${table.name} gin_trgm_ops`,
    ),
    bookEmailIdx: index("books_email_idx").using(
      "gin",
      sql`${table.email} gin_trgm_ops`,
    ),
  }),
);

module.exports = { booksTable };
