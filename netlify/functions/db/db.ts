import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as schema from './schema';

export const useDatabase = async () => {
  const client = new Client(process.env.DATABASE_CONNECTION_STRING);
  await client.connect();
  const db = drizzle(client, { schema });

  return db;
};