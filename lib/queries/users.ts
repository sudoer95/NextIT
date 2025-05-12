import { prisma } from "../prisma";
const bcrypt = require('bcrypt');

export async function FetchUser(id: number) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });
    return user;
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(0);
  } finally {
    await prisma.$disconnect();
  }
}
export async function FetchAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(0);
  } finally {
    await prisma.$disconnect();
  }
}

export async function FetchAdmins() {
  try {
    const admins = await prisma.user.findMany({
      where: { is_admin: true },
    });
    return admins;
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(0);
  } finally {
    await prisma.$disconnect();
  }
}

export async function CreateUser(email: string, password: string, name?: string, is_admin?: boolean): Promise<void> {
  try {
    await prisma.user.create({
      data: {
        email: email,
        password_hash: await bcrypt.hash(password, 10),
        name: name ? name : null,
        is_admin: is_admin ? is_admin : false,
      },
    })
  }
  catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(0);
  } finally {
    await prisma.$disconnect();
  }
}
export async function UpdateUser(id: number, email?: string, password?: string, name?: string, is_admin?: boolean): Promise<void> {
  try {
    await prisma.user.update({
      where: { id: id },
      data: {
        email: email,
        password_hash: bcrypt.hash(password, 10),
        name: name,
        is_admin: is_admin,
      },
    })
  }
  catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(0);
  } finally {
    await prisma.$disconnect();
  }
}
export async function DeleteUser(id: number): Promise<void> {
  try {
    await prisma.user.delete({
      where: { id: id },
    })
  }
  catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(0);
  } finally {
    await prisma.$disconnect();
  }
}

export async function FetchUserCart(id: number) {
  try{
    prisma.user.findMany({
      where:{ cartItems:{}}
    })
  }
  catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(0);
  } finally {
    await prisma.$disconnect();
  }
}

export async function CheckIfEmailUsed(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (user) {
      return true;
    }
    return false;
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(0);
  } finally {
    await prisma.$disconnect();
  }
}