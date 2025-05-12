import { FetchProducts, FetchProductById ,FetchFilteredProducts, CreateProduct, UpdateProduct, DeleteProduct } from "@/lib/queries/products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        if (searchParams.get("Filtered") == "true") {
            const category_id = Number(searchParams.get("category") || undefined);
            const search = searchParams.get("q") || undefined;
            const limit = parseInt(searchParams.get("limit") || "20");
            const page = parseInt(searchParams.get("page") || "1");
            const offset = (page - 1) * limit;

            const products = await FetchFilteredProducts({ category_id, search, limit, offset });
            return NextResponse.json(products);
        }
        else if (searchParams.get("id")){
            const id = Number(searchParams.get("id"));
            const product = await FetchProductById(id);
            if (!product) {
                return NextResponse.json({ error: "Product not found" }, { status: 404 });
            }
            return NextResponse.json(product);
        }
        else{
            const products = await FetchProducts();
            return NextResponse.json(products);
        }
    }
    catch (e) {
        return NextResponse.json({ error: "Error fetching products", e }, { status: 500 });
    }
}
export async function POST(request: Request) {
    try {
        const { name, price, category_id, stock, description, image_url } = await request.json();
        await CreateProduct(name, price, category_id, stock, description, image_url);
        return NextResponse.json({ message: "Product created successfully" });
    }
    catch (e) {
        return NextResponse.json({ error: "Error creating product", e }, { status: 500 })
    }
}
export async function PUT(request: Request) {
    try {
        const { id, name, price, category_id, stock, description, image_url } = await request.json();
        await UpdateProduct(id, name, price, category_id, stock, description, image_url);
        return NextResponse.json({ message: "Product updated successfully" });
    }
    catch (e) {
        return NextResponse.json({ error: "Error updating product", e }, { status: 500 })
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        await DeleteProduct(id);
        return NextResponse.json({ message: "Product deleted successfully" });
    }
    catch (e) {
        return NextResponse.json({ error: "Error deleting product", e }, { status: 500 })
    }
}