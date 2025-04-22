import { dbpool } from '@/lib/db';
import dotenv from 'dotenv';
dotenv.config({path: '.env'})


console.log('User:', process.env.POSTGRES_USER);
console.log('Host:', process.env.POSTGRES_HOST);
console.log('Database:', process.env.POSTGRES_DATABASE);
console.log('Password:', process.env.POSTGRES_PASSWORD);

async function testDb(){
    await dbpool.connect();
    console.log("dbpool connected succesfully");
    const datetime = dbpool.query('SELECT CURRENT_TIMESTAMP');
    console.log(datetime);
}

testDb();