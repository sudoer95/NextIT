'use client';
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "../../components/ProductCard";
import { RouteTransition } from "@/components/RouteTransition";
import { Product, Category } from "@/lib/types";

export default function Products() {
    const [categoryFilter, setCategoryFilter] = useState<number | null>(null);
    const [products, setProducts] = useState(Array<Product>);
    const [page, setPage] = useState(1);
    const [categories, setCategories] = useState(Array<Category>);

    useEffect(() => {
        fetch('/api/categories')
            .then(res => res.json())
            .then(data => setCategories(Array.isArray(data) ? data : []));
    }, [])

    useEffect(() => {
        fetch(`/api/products/?Filtered=true&limit=20&page=${page}&category=${categoryFilter}`)
        .then(res => res.json())
        .then(data => setProducts(Array.isArray(data) ? data : []));
    }, [page, categoryFilter])


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
                    {/* {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))} */}
                    {products.map((product)=>(
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </RouteTransition>
        </div>
    );
}