const request = require('supertest');

/**
 * MOCK db module BEFORE importing app
 */
jest.mock('../src/db', () => ({
  testConnection: jest.fn().mockResolvedValue(true),
}));

const app = require('../src/app');

describe('users API', () => {
  it('GET / returns ok', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});
