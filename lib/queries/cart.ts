import { prisma } from '@/lib/prisma';

export async function AddItemToCart(user_id: number, product_id: number, quantity?: number): Promise<void> {
    try {
        prisma.cartItem.create({
            data: {
                user_id: user_id,
                product_id: product_id,
                quantity: quantity || 1,
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

export async function EditQuantityOfCartItem(id: number, quantity: number): Promise<void> {
    try {
        prisma.cartItem.update({
            where: {
                id: id,
            },
            data: {
                quantity: quantity,
            }
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

export async function DeleteItemFromCart(id: number): Promise<void> {
    try {
        prisma.cartItem.delete({
            where: { id: id, }
        })
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(0);
    } finally {
        await prisma.$disconnect();
    }
}