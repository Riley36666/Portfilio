import request from 'supertest';
import fs from 'fs';
import path from 'path';
import app from '../server';

const messagesPath = path.join(__dirname, '../data/messages.json');
const sessionPath = path.join(__dirname, '../data/session.json');

beforeEach(() => {
  process.env.NODE_ENV = 'test';
  // ensure clean state
  try { fs.unlinkSync(messagesPath); } catch {}
  try { fs.unlinkSync(sessionPath); } catch {}
});

describe('Admin routes', () => {
  test('POST /admin/addMessages should save message', async () => {
    const res = await request(app)
      .post('/admin/addMessages')
      .send({ name: 'Alice', email: 'a@b.com', message: 'Hello' })
      .set('Accept', 'application/json');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);

    const raw = fs.readFileSync(messagesPath, 'utf-8');
    const messages = JSON.parse(raw);
    expect(Array.isArray(messages)).toBe(true);
    expect(messages.length).toBe(1);
    expect(messages[0].name).toBe('Alice');
  }, 10000);

  test('POST /admin/Password should write token', async () => {
    process.env.PASSWORD = 'secret';

    const res = await request(app)
      .post('/admin/Password')
      .send({ password: 'secret' });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();

    const raw = fs.readFileSync(sessionPath, 'utf-8');
    const data = JSON.parse(raw);
    expect(data.token).toBe(res.body.token);
  }, 10000);
});
