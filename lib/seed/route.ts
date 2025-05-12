import { prisma } from '@/lib/prisma';
import { CreateProduct } from '../queries/products';
import { CreateUser } from '../queries/users';
import { CreateCategory } from '../queries/category';
import { FindCategoryIdByName } from '../service/route';

async function testDb() {
    prisma.$queryRaw`SELECT CURRENT_TIMESTAMP`;
    console.log('If you see this message, the database connection is working.');
}

export async function seedUsers() {
    try {
        CreateUser("alice@exl.nk", "#Alice0034", "Alice", true);
        CreateUser("ares@exl.nk", "#Ares2308", "Ares");
        CreateUser("mizuki@exl.nk", "AsukaMyBeloved2323", "Mizuki");
        CreateUser("asuka@exl.nk", "#Passwd4300192", "Asuka");
        CreateUser("amane@exl.nk", "#40fmmm288plpl", "Amane");
    }
    catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(0);
    }
    finally {
        await prisma.$disconnect();
    }
}

export async function seedCategories() {
    try {
        CreateCategory("laptops");
        CreateCategory("smartphones");
        CreateCategory("headphones");
        CreateCategory("smartwatches");
        CreateCategory("tablets")
    }
    catch (e) {
        console.error(e);
    }
}

export async function seedProducts() {
    try {
        CreateProduct("Macbook air 11 2014", 100, await FindCategoryIdByName("laptops"), 5, "Powerful ultrabook for programmers.", "/images/dummy1x1.png");
        CreateProduct("Galaxy watch active 2", 20, await FindCategoryIdByName("smartwatches"), 30, "Smart watches on tizen.", "/images/dummy1x1.png");
        CreateProduct("Redmi note 11 pro 5g", 150, await FindCategoryIdByName("smartphones"), 7, "Good phone for everyday use.", "/images/dummy1x1.png");
        CreateProduct("iPad air 8 2020", 240, await FindCategoryIdByName("tablets"), 10, "Comes with apple pencil 2! Artist's prodigy.", "/images/dummy1x1.png");
        CreateProduct("Huawei freebuds 5i", 20, await FindCategoryIdByName("headphones"), 15, "Good headphones with LDAC and cheap price.", "/images/dummy1x1.png");
    }
    catch (e) {
        console.error(e);
    }
}
export async function seed() {
    try {
        testDb();
        // await seedUsers();
        // await seedCategories();
        await seedProducts();
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await prisma.$disconnect();
    }
}
seed();