const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });

const { defineConfig } = require("drizzle-kit");

const connectionString = process.env.DATABASE_URL;

const drizzleConfig = defineConfig({
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./drizzle/schema.js",
  dbCredentials: {
    url: connectionString,
  },
});

module.exports = drizzleConfig;
