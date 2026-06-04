import { afterAll, beforeEach, describe, expect, test } from 'vitest';
// @ts-ignore: supertest may not have type declarations in this environment
const request = require('supertest');
import fs from 'fs';
import path from 'path';
import os from 'os';
import app from '../server';

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-admin-return-test-'));
const messagesPath = path.join(TEST_DATA_DIR, 'messages.json');
const sessionPath = path.join(TEST_DATA_DIR, 'session.json');

beforeEach(() => {
  process.env.NODE_ENV = 'test';
  process.env.DATA_DIR = TEST_DATA_DIR;
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
});

afterAll(() => {
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true });
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
