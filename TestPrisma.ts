import { PrismaClient } from '@/generated/prisma'
const bcrypt = require('bcrypt');
const prisma = new PrismaClient()


async function main() {
    const saltRounds = 10;

    await prisma.user.create({
        data:{
            email: "noir@bunnymail.nk",
            name: "Noir",
            password_hash: await bcrypt.hash("NoirNikke2025", 10),
        }
    });
    const allUsers = await prisma.user.findMany();
    console.dir(allUsers, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })