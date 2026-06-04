// @ts-ignore
import { beforeEach, describe, expect, test } from 'vitest';
// @ts-ignore: supertest may not have type declarations in this environment
import request from 'supertest';
import fs from 'fs';
import path from 'path';
import os from 'os';
import app from '../server';

// Use an isolated data dir for tests
const TEST_DATA_DIR = path.join(__dirname, 'tmp_test_data');
const messagesPath = path.join(TEST_DATA_DIR, 'messages.json');
const sessionPath = path.join(TEST_DATA_DIR, 'session.json');

beforeEach(() => {
  process.env.NODE_ENV = 'test';
  process.env.DATA_DIR = TEST_DATA_DIR;

  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true }); // 👈 ADD THIS
});

describe('Admin routes', () => {
  test('POST /admin/addMessages should save message', async () => {
  const res = await request(app)
    .post('/admin/addMessages')
    .send({ name: 'Alice', email: 'a@b.com', message: 'Hello' })
    .set('Accept', 'application/json');

  console.log('Expected path:', messagesPath);
  console.log('File exists:', fs.existsSync(messagesPath));

  expect(res.status).toBe(200);
  expect(res.body.success).toBe(true);

  const raw = fs.readFileSync(messagesPath, 'utf-8');
  const messages = JSON.parse(raw);

  console.log('Messages:', messages);

  expect(Array.isArray(messages)).toBe(true);
  expect(messages.length).toBe(1);
  expect(messages[0].name).toBe('Alice');
});

  test('POST /admin/Password should write token', async () => {
    process.env.USERNAME = 'test';
    process.env.PASSWORD = 'secret';

    const res = await request(app)
      .post('/admin/Password')
      .send({ username: 'test', password: 'secret' });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();

    const raw = fs.readFileSync(sessionPath, 'utf-8');
    const data = JSON.parse(raw);
    expect(data.token).toBe(res.body.token);
  }, 10000);
});
