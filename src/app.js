require('dotenv').config();
const express = require('express');
const usersRoutes = require('./routes/users');
const db = require('./db');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'ok', env: process.env.NODE_ENV || 'dev' });
});



// ensure DB is reachable before starting
(async function start() {
  try {
    if (process.env.NODE_ENV !== "test") {
      await db.testConnection();
    }

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to DB, exiting:', err.message);
    process.exit(1);
  }
})();

module.exports = app;
