import { PrismaClient } from "@/generated/prisma";
import bcrypt from 'bcrypt';
import { data } from "framer-motion/client";

const prisma = new PrismaClient();

async function testDb(){
    prisma.$queryRaw`SELECT CURRENT_TIMESTAMP`;
    console.log('If you see this message, the database connection is working.');
}
testDb();

export async function seedUsers(){
    try{
       
    }
    catch (e){
        console.error(e);
        await prisma.$disconnect;
        process.exit(0);
    }
    finally{
        await prisma.$disconnect
    }
}