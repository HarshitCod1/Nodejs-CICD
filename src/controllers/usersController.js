const db = require('../db');

async function createUser(req, res) {
  const { name, email } = req.body;
  const result = await db.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email, created_at',
    [name, email]
  );

  res.json(result.rows[0]);
}

async function getUsers(req, res) {
  const result = await db.query(
    'SELECT id, name, email, created_at FROM users ORDER BY id DESC'
  );
  res.json(result.rows);
}

async function getUserById(req, res) {
  const { id } = req.params;
  const result = await db.query(
    'SELECT id, name, email, created_at FROM users WHERE id = $1',
    [id]
  );
  res.json(result.rows[0]);
}

module.exports = { createUser, getUsers, getUserById };
