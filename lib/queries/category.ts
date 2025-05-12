import { prisma } from '@/lib/prisma';

export async function FetchCategories() {
    try {
        const categories = await prisma.category.findMany(
            {
                select: {
                    id: true,
                    name: true,
                },
            }
        );
        return categories;
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(0);
    } finally {
        await prisma.$disconnect();
    }
}


export async function CreateCategory(category_name: string) {
    try {
        const existingCategory = await prisma.category.findUnique({
            where: {
                name: category_name,
            },
        });
        if (existingCategory) {
            return console.log('Category already exists');
        }
        await prisma.category.create({
            data: {
                name: category_name,
            }
        });
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(0);
    } finally {
        await prisma.$disconnect();
    }
}

export async function UpdateCategory(id: number, category_name: string) {
    try {
        const existingCategory = await prisma.category.findUnique({
            where: {
                name: category_name,
            },
        });
        if (existingCategory) {
            return console.log('Category already exists');
        }
        await prisma.category.update({
            where: {
                id: id,
            },
            data: {
                name: category_name,
            }
        });
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(0);
    } finally {
        await prisma.$disconnect();
    }
}

export async function DeleteCategory(id: number) {
    try {
        await prisma.category.delete({
            where: {
                id: id,
            },
        });
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(0);
    } finally {
        await prisma.$disconnect();
    }
}
