// Updated users.test.js with CI-safe DB mocking

const request = require('supertest');
const app = require('../src/app');

// 🔥 Mock DB completely during test mode (CI)
if (process.env.NODE_ENV === "test") {
  jest.mock('../src/db', () => ({
    testConnection: jest.fn(() => Promise.resolve(true))
  }));
}

const db = require('../src/db');

beforeAll(async () => {
  // This will NOT call real DB in CI because it's mocked
  await db.testConnection();
});

describe('users API', () => {
  it('GET / returns ok', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});