import express, { Router } from 'express';
import serverless from 'serverless-http';
// import pg from 'pg';

// var db = new pg.Client(DATABASE_CONNECTION_STRING);
// db.connect();

const api = express();

const router = Router();
router.get('/hello', (req, res) => res.send('Hello World!'));

api.use('/api/', router);

export const handler = serverless(api);