require("dotenv").config();

const pool = require("./postgres-db");

async function main() {
  const res = await pool.query(`
    CREATE TABLE IF NOT EXISTS logs (
      id SERIAL PRIMARY KEY,
      message TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `);

  const insertRes = await pool.query(
    "INSERT INTO logs (message) VALUES ($1) RETURNING *",
    ["Saved from Node.js"],
  );
  console.log(res.rows[0]);
  console.log("Inserted:", insertRes.rows[0]);

  await pool.end();
}

main().catch(console.error);
