(async function start() {
  try {
    if (process.env.NODE_ENV !== 'test') {
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
