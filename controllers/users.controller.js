const db = require("../database");

const { usersTable } = require("../drizzle/schema");

async function getAllUsers() {
  const users = await db.select().from(usersTable);
  console.log(`🟡 LOG - users: ${users}`);
  return users;
}
// getAllUsers();
async function insertUsers({ name, email }) {
  const [insertedUser] = await db
    .insert(usersTable)
    .values({
      name,
      email,
    })
    .returning();
  return insertedUser;
}

insertUsers({ name: "user3", email: "u3@u3.com" });
insertUsers({ name: "user4", email: "u4@u4.com" });
