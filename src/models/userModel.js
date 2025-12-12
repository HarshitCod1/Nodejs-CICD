const db = require('../db');

async function createUser({ name, email }) {
  const result = await db.query(
    `INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email, created_at`,
    [name, email]
  );
  return result.rows[0];
}

async function getUsers() {
  const result = await db.query(`SELECT id, name, email, created_at FROM users ORDER BY id DESC`);
  return result.rows;
}

async function getUserById(id) {
  const result = await db.query(`SELECT id, name, email, created_at FROM users WHERE id = $1`, [id]);
  return result.rows[0];
}

module.exports = { createUser, getUsers, getUserById };
