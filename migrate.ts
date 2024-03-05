import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

import { handler } from './netlify/functions/api';
import { DB } from './netlify/functions/db';

const client = new Client(process.env.DATABASE_CONNECTION_STRING);
// await client.connect();
const db = drizzle(client);

console.log('MIGRATE', db, handler, DB);