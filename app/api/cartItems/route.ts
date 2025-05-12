import { AddItemToCart, DeleteItemFromCart, EditQuantityOfCartItem } from "@/lib/queries/cart";
import { FetchUserCart } from "@/lib/queries/users";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { id } = await request.json();
        const cartItems = await FetchUserCart(id);
        return NextResponse.json(cartItems);
    }
    catch (e) {
        return NextResponse.json({ error: "Error fetching cart items.", e }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const { user_id, product_id, quantity } = await request.json();
        await AddItemToCart(user_id, product_id, quantity);
        return NextResponse.json({ status: 200 });
    }
    catch (e) {
        NextResponse.json({ error: "Error adding item to cart.", e }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { id, quantity } = await request.json();
        await EditQuantityOfCartItem(id, quantity);
    }
    catch (e) {
        NextResponse.json({ error: "Error adding item to cart.", e }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        await DeleteItemFromCart(id);
    }
    catch (e) {
        NextResponse.json({ error: "Error adding item to cart.", e }, { status: 500 });
    }
}