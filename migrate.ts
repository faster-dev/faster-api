import { migrate } from 'drizzle-orm/node-postgres/migrator';

import { useDatabase } from './netlify/functions/db/db';

const runMigrations = async () => {
  const db = await useDatabase();
  await migrate(db, { migrationsFolder: './drizzle/migrations' });
}

runMigrations();