"use client";
import { useEffect, useState } from "react";

export default function AddProduct(){
    const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
    useEffect(() => {
        fetch("/api/categories")
            .then((res) => res.json())
            .then((data) => setCategories(Array.isArray(data) ? data : []));
    }, []);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Add Product</h1>
            <form className="flex flex-col space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const data = {
                    name: formData.get('name'),
                    description: formData.get('description'),
                    price: parseFloat(formData.get('price') as string),
                    category_id: parseInt(formData.get('category_id') as string),
                    stock: parseInt(formData.get('stock') as string),
                    image_url: formData.get('image_url'),
                };
                fetch('/api/products', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then((res) => {
                    if (res.ok) {
                        alert('Product added successfully');
                    } else {
                        alert('Failed to add product');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('An error occurred while adding the product');
                });
            }}>
                <input type="text" placeholder="Name" className="border p-2 rounded" name='name' />
                <input type="text" placeholder="Description" className="border p-2 rounded" name='description' />
                <input type="number" placeholder="Price" className="border p-2 rounded" name='price' />
                <input type="text" placeholder="Image URL" className="border p-2 rounded" name='image_url' />
                <input type="number" placeholder="Stock" className="border p-2 rounded" name='stock' />
                <select name="category_id" className="border p-2 rounded">
                    <option value="">Select a category</option>
                    {categories.map((category:any) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Product</button>
            </form>
        </div>
    );
}