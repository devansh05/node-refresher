const { pgTable, serial, varchar, uuid } = require("drizzle-orm/pg-core");


const authorsTable = pgTable("authors", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 80 }).notNull(),
  email: varchar({ length: 100 }).notNull().unique(),
});

module.exports = { authorsTable };
