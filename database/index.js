const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });

const { drizzle } = require("drizzle-orm/node-postgres");

const connectionString = process.env.DATABASE_URL;
const db = drizzle(connectionString);

module.exports = db;
