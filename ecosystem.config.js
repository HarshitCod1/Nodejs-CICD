module.exports = {
  apps: [
    {
      name: 'express-postgres-ci-demo',
      script: './src/app.js',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
