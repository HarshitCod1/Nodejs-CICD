const app = require('./app');
const db = require('./db');
const PORT = process.env.PORT || 3000;

(async function start() {
  try {
    await db.testConnection();
    console.log('✅ Database connected');
  } catch (err) {
    console.error('⚠️ DB not connected, starting server anyway');
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})();
