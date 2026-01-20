const { pgTable, serial, varchar } = require("drizzle-orm/pg-core");

const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar({ length: 50 }).notNull(),
  email: varchar({ length: 100 }).notNull().unique(),
});

module.exports = { usersTable };
