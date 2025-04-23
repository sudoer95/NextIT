import { dbpool } from '../db';
import dotenv from 'dotenv';
dotenv.config({path: '.env'});

async function testDb(){
    await dbpool.connect();
    const datetime = await dbpool.query('SELECT CURRENT_TIMESTAMP');
    console.log(datetime.rows[0].current_timestamp);
    console.log('If you see this message, the database connection is working.');
}

testDb();