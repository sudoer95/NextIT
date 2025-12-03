"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function EditProduct() {
    const { id } = useParams();
    const router = useRouter();
    const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
    const [product, setProduct] = useState<{ id: number; name: string; description: string; price: number; category_id: number; stock: number; image_url: string } | null>(null);

    useEffect(() => {
        if (id) {
            fetch(`/api/products?id=${id}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data) {
                        setProduct(data);
                    } else {
                        alert("Product not found");
                    }
                });
        }
    }, [id]);

    useEffect(() => {
        fetch("/api/categories")
            .then((res) => res.json())
            .then((data) => setCategories(Array.isArray(data) ? data : []));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Edit Product</h1>
            <div className="mb-4">
                <p>{id}</p>
            </div>
            <form className="flex flex-col space-y-4" onSubmit={async (e) => {
                e.preventDefault();
                let uploadedImageUrl = null;
                const formData = new FormData(e.target as HTMLFormElement);
                const imageFile = formData.get('image_file') as File || null;
                if (imageFile) {
                    const uploadForm = new FormData();
                    uploadForm.append("image", imageFile);

                    const uploadRes = await fetch("/api/imageUpload", {
                        method: "POST",
                        body: uploadForm,
                    });

                    const uploadJson = await uploadRes.json();
                    uploadedImageUrl = uploadJson.image_url;
                }
                const data = {
                    id: parseInt(id as string),
                    name: formData.get('name'),
                    description: formData.get('description'),
                    price: parseFloat(formData.get('price') as string),
                    category_id: parseInt(formData.get('category_id') as string),
                    stock: parseInt(formData.get('stock') as string),
                    image_url: uploadedImageUrl,
                };

                fetch(`/api/products/`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then((res) => {
                        if (res.ok) {
                            alert('Product updated successfully');
                            router.push('/admin/products/')
                        } else {
                            alert('Failed to update product');
                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        alert('An error occurred while updating the product');
                    });
            }}>
                <input type="text" defaultValue={product?.name} className="border p-2 rounded" name='name' />
                <input type="text" defaultValue={product?.description} className="border p-2 rounded" name='description' />
                <input type="number" defaultValue={product?.price !== undefined ? String(product.price) : undefined} className="border p-2 rounded" name='price' />
                <input type="text" defaultValue={product?.image_url} className="border p-2 rounded" name='image_url_string' />
                <input type="number" defaultValue={product?.stock !== undefined ? String(product?.stock) : undefined} className="border p-2 rounded" name='stock' />
                <select name="category_id" className="border p-2 rounded" defaultValue={product?.category_id} required>
                    <option value="">Select a category</option>
                    {categories.map((category: any) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <input type="file" className="bg-blue-300 text-white p-2 rounded" name='image_file' />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Product</button>
            </form>
        </div>
    );
}