import request from 'supertest';
import fs from 'fs';
import path from 'path';
import app from '../server';

const TEST_DATA_DIR = path.join(__dirname, 'tmp_test_data');
const messagesPath = path.join(TEST_DATA_DIR, 'messages.json');
const sessionPath = path.join(TEST_DATA_DIR, 'session.json');

beforeEach(() => {
  process.env.NODE_ENV = 'test';
  process.env.DATA_DIR = TEST_DATA_DIR;
  try { fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true }); } catch {}
});

describe('Admin returnMessages', () => {
  test('GET /admin/returnMessages requires auth and returns messages', async () => {
    // create a token
    process.env.PASSWORD = 'secret';
    process.env.USERNAME = 'admin';

    const pwRes = await request(app)
      .post('/admin/Password')
      .send({ username: 'admin', password: 'secret' });

    expect(pwRes.status).toBe(200);
    const token = pwRes.body.token;
    expect(token).toBeDefined();

    // add a message
    const addRes = await request(app)
      .post('/admin/addMessages')
      .send({ name: 'Bob', email: 'b@c.com', message: 'Hi' })
      .set('Accept', 'application/json');

    expect(addRes.status).toBe(200);

    // fetch messages with token
    const getRes = await request(app)
      .get('/admin/returnMessages')
      .set('x-admin-token', token as string);

    expect(getRes.status).toBe(200);
    expect(Array.isArray(getRes.body)).toBe(true);
    expect(getRes.body.length).toBeGreaterThanOrEqual(1);
    expect(getRes.body[0].name).toBe('Bob');
  }, 10000);
});
