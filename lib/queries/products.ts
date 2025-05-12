import { select } from 'framer-motion/client';
import { prisma } from '../prisma';

export async function FetchProducts() {
    try {
        const products = await prisma.product.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                image_url: true,
                stock: true,
                created_at: true,
                category: true,
            }
    });
        return products;
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(0);
    } finally {
        await prisma.$disconnect();
    }
}

export async function FetchFilteredProducts({category_id, search, limit, offset}: {category_id?: number, search?: string, limit?: number, offset?: number}) {
    try {
        const products = await prisma.product.findMany({
            where: {
                AND: [
                    category_id ? { category_id: category_id } : {},
                    search ? { name: { contains: search } } : {},
                ],
            },
            take: limit,
            skip: offset,
        });
        return products;
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(0);
    } finally {
        await prisma.$disconnect();
    }
}

export async function FetchProductById(id: number) {
    try {
        const product = await prisma.product.findUnique({
            where: { id: id },
        });
        return product;
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(0);
    } finally {
        await prisma.$disconnect();
    }
}

export async function FetchProductByCategoryName(category_name: string) {
    try {
        const product = await prisma.product.findMany({
            where: { category: { name: category_name } },
        });
        return product;
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(0);
    } finally {
        await prisma.$disconnect();
    }
}
export async function CreateProduct(
    name: string,
    price: number,
    category_id: number,
    stock?: number,
    description?: string,
    image_url?: string,
): Promise<void> {
    try {
        await prisma.product.create({
            data: {
                name: name,
                description: description,
                price: price,
                stock: stock,
                category_id: category_id,
                image_url: image_url,
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
export async function UpdateProduct(
    id: number,
    name?: string,
    price?: number,
    category_id?: number,
    stock?: number,
    description?: string,
    image_url?: string,
): Promise<void> {
    try {
        await prisma.product.update({
            where: { id: id },
            data: {
                name: name,
                description: description,
                price: price,
                stock: stock,
                category_id: category_id,
                image_url: image_url,
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
export async function DeleteProduct(id: number): Promise<void> {
    try {
        await prisma.product.delete({
            where: { id: id },
        });
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(0);
    } finally {
        await prisma.$disconnect();
    }
}