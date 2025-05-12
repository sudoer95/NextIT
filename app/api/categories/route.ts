import { CreateCategory, FetchCategories, UpdateCategory, DeleteCategory } from "@/lib/queries/category";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const categories = await FetchCategories();
        return NextResponse.json(categories);
    }
    catch (e) {
        return NextResponse.json({ error: "Error fetching categories.", e }, { status: 500 });
    }
}
export async function POST(request: Request) {
    try {
        const { name } = await request.json();
        await CreateCategory(name);
        return NextResponse.json({message:"Category created succesfully"}, {status: 200})
    }
    catch (e) {
        return NextResponse.json({ error: "Error creating category.", e }, { status: 500 });
    }
}
export async function PUT(request: Request) {
    try {
        const { id, name } = await request.json();
        await UpdateCategory(id, name);
        return NextResponse.json({message: "Category updated succesfully"}, {status: 200});
    }
    catch (e) {
        return NextResponse.json({ error: "Error updating category", e }, { status: 500 });
    }
}
export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        await DeleteCategory(id);
        return NextResponse.json({message: "Category deleted succesfully"}, {status: 200});
    }
    catch (e) {
        return NextResponse.json({ error: "Error deleting category", e }, { status: 500 });
    }
}