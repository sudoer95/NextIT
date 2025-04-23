'use client';
import { useState } from "react";
import { categories } from "@/app/lib/dummyData";
import { products } from "@/app/lib/dummyData";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCart } from "../../components/ProductCard";
import { RouteTransition } from "@/components/RouteTransition";

function usePreloadFilter(setCategoryFilter: (id: number | null) => void) {
    const searchParams = useSearchParams();

    useEffect(() => {
        const categoryId = searchParams.get("category_id");
        if (categoryId) {
            setCategoryFilter(Number(categoryId));
        }
    }, [searchParams, setCategoryFilter]);
}

export default function Products() {
    const [categoryFilter, setCategoryFilter] = useState<number | null>(null);
    usePreloadFilter(setCategoryFilter);
    const filteredProducts = categoryFilter
        ? products.filter((product) => product.category_id === categoryFilter)
        : products;

    return (
        <div>
            <RouteTransition>
            <br />
            <h1 className="text-center font-bold font-mono text-2xl">Products</h1>
            <div className="text-center">
                <label htmlFor="categoryFilter">Filter by Category: </label>
                <select
                    id="categoryFilter"
                    onChange={(e) => setCategoryFilter(Number(e.target.value) || null)}
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
                <ProductCart key={product.id} product={product}/>
            ))}
            </div>
            </RouteTransition>
        </div>
    );
}