const {
  pgTable,
  serial,
  varchar,
  uuid,
  index,
} = require("drizzle-orm/pg-core");
const { sql } = require("drizzle-orm");

const authorsTable = pgTable(
  "authors",
  {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar({ length: 80 }).notNull(),
    email: varchar({ length: 100 }).notNull().unique(),
  },
  (table) => ({
    authorNameIdx: index("author_name_idx").using(
      "gin",
      sql`${table.name} gin_trgm_ops`,
    ),
    authorEmailIdx: index("author_email_idx").using(
      "gin",
      sql`${table.email} gin_trgm_ops`,
    ),
  }),
);

module.exports = { authorsTable };
