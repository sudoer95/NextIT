"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function ManageProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then(setProducts);
    }, []);
    console.log();
    return (
        <div>
            <p className="text-5xl">Products.</p>
            <div className="mt-3 mb-3">
                <Link href="/admin/products/create" className="bg-blue-500 text-white p-2 rounded mt-3 mb-3">Create new product</Link>
            </div>
            <div>
                <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                            <th className="border border-gray-300 px-4 py-2">Category</th>
                            <th className="border border-gray-300 px-4 py-2">Stock</th>
                            <th className="border border-gray-300 px-4 py-2">Created at</th>
                            <th className="border border-gray-300 px-4 py-2">Edit</th>
                            <th className="border border-gray-300 px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product: any) => (
                            <tr key={product.id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.category.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.stock}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.created_at}</td>
                                <td className="border border-gray-300 px-4 py-2"><Link href={`products/edit/${product.id}`}>Edit</Link></td>
                                <td className="border border-gray-300 px-4 py-2"><button
                                    className="bg-red-500 text-white rounded"
                                    onClick={() => {
                                        fetch(`/api/products/`, {
                                            method: "DELETE",
                                            headers: {
                                                "Content-Type": "application/json",
                                            },
                                            body: JSON.stringify({ id: product.id }),
                                        })
                                            .then((res) => {
                                                if (res.ok) {
                                                    setProducts((prevProducts) =>
                                                        prevProducts.filter((p: any) => p.id !== product.id)
                                                    );
                                                    alert("Product deleted successfully");
                                                } else {
                                                    alert("Failed to delete product");
                                                }
                                            })
                                            .catch((err) => {console.error(err);alert(err)});
                                    }}
                                >
                                    Delete
                                </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

// async function deleteProduct(id: string) {
//     try {
//         const response = await fetch('/api/your-endpoint', {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ id }),
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             console.error('Error deleting product:', errorData);
//             throw new Error(errorData.error || 'Failed to delete product');
//         }

//         const data = await response.json();
//         console.log('Success:', data.message);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }