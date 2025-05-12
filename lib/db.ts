import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config({path: '.env'});

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

export const dbpool = pool;