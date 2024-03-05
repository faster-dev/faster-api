import express, { Router } from 'express';
import serverless from 'serverless-http';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

import { DB } from './db';

console.log('DB', DB);

const useDatabase = async () => {
  const client = new Client(process.env.DATABASE_CONNECTION_STRING);
  await client.connect();
  const db = drizzle(client);

  return db;
};

const api = express();

const router = Router();
router.get('/hello', (req, res) => res.send('Hello World!'));

api.use('/api/', router);

export const handler = serverless(api);