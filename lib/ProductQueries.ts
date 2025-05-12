import { PrismaClient } from "@/generated/prisma";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function FetchUsers(id: number){
    try{
       await prisma.user.findUnique({where:{id: id,}})
    }
    catch (e){
        console.error(e);
        await prisma.$disconnect();
        process.exit(0);
    }
    finally{
        await prisma.$disconnect();
    }
}