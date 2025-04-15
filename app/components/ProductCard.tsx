import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/dummyData";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category_id: number;
    image_url: string;
}

interface Category {
    id: number;
    name: string;
}
interface ProductCartProps {
    product: Product;
}

export default function ProductCart({ product }: ProductCartProps) {
    // Dummy categories data, replace with actual data fetching if needed
    // const categories = await fetchCategories(); // Fetch categories from your API or data source
    return (
        <div className="m-2">
            <Link href={`/products/product/${product.id}`}>
                <div className="border-2 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                    <div className="relative w-full h-48">
                        <Image src={product.image_url} alt={product.name} fill className="object-cover"/>
                    </div>
                    <div className="p-4 space-y-2">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                        <span className="text-m text-green-600">${product.price}</span>
                        <span className="inline-block text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {categories.find(category => category.id === product.category_id)?.name || "Unknown Category"}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}