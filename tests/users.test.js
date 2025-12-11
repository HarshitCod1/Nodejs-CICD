const request = require('supertest');
const app = require('../src/app');
const db = require('../src/db');

beforeAll(async () => {
  await db.testConnection();
});

describe('users API', () => {
  it('GET / returns ok', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});
