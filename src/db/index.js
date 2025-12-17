const { Pool } = require('pg');

nst pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function query(text, params) {
  return pool.query(text, params);
}

async function testConnection() {
  const res = await pool.query('SELECT 1 AS ok');
  if (!res || res.rows[0].ok !== 1) throw new Error('DB test failed');
  return true;
}

module.exports = { query, testConnection, pool };
