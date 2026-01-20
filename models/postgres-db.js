const { Pool } = require("pg");

const pool = new Pool({
  host: "192.168.29.144", // Windows machine IP (from ipconfig)
  port: 5432, // Exposed Docker port
  user: "admin", // POSTGRES_USER
  password: "devansh123", // POSTGRES_PASSWORD
  database: "node-postgres-demo", // POSTGRES_DB
  ssl: false, // Important for local Docker
});

module.exports = pool;
