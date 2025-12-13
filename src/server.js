const app = require('./app');
const db = require('./db');

const PORT = process.env.PORT || 3000;

(async function startServer() {
  try {
    await db.testConnection();
    console.log('Database connected');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to DB:', err.message);
    process.exit(1);
  }
})();
