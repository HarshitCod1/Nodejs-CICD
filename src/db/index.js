const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  user: process.env.DB_USER || 'dev_user',
  password: process.env.DB_PASSWORD || 'DevPass123',
  database: process.env.DB_NAME || 'devdb',
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
