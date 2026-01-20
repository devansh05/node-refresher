const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });

const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST, // Windows machine IP (from ipconfig)
  port: process.env.DB_PORT, // Exposed Docker port
  user: process.env.DB_USER, // POSTGRES_USER
  password: process.env.DB_PASSWORD, // POSTGRES_PASSWORD
  database: process.env.DB_NAME, // POSTGRES_DB
  ssl: false, // Important for local Docker
});

module.exports = pool;
