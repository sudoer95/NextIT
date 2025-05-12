import { prisma } from "@/lib/prisma";

export async function FindUserIdByEmail(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { email: email },
            select: { id: true },
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
export async function FindCategoryNameById(id: number) {
    try {
        const category_name = await prisma.category.findUnique({
            where: { id: id },
            select: { name: true },
        });
        return category_name;
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(0);
    } finally {
        await prisma.$disconnect();
    }
}

export async function FindCategoryIdByName(name: string):Promise<number> {
    try {
        const category = await prisma.category.findUnique({
            where: { name: name },
            select: { id: true },
        });
        const category_id = Number(category?.id);
        return category_id;
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(0);
    } finally {
        await prisma.$disconnect();
    }
}