"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Category = {
    id: number;
    name: string;
};

export default function ManageCategories() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetch('/api/categories')
            .then((res) => res.json())
            .then(setCategories);
    }, []);

    return (
        <div>
            <p className="text-5xl">Categories.</p>
            <div className="mt-3 mb-3">
                <Link href="/admin/categories/create" className="bg-blue-500 text-white p-2 rounded mt-3 mb-3">Create new category</Link>
            </div>
            <div>
                <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Edit</th>
                            <th className="border border-gray-300 px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category: any) => (
                            <tr key={category.id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">{category.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{category.name}</td>
                                <td className="border border-gray-300 px-4 py-2"><Link href={`categories/edit/${category.id}`}>Edit</Link></td>
                                <td className="border border-gray-300 px-4 py-2"><button
                                    className="bg-red-500 text-white rounded"
                                    onClick={() => {
                                        fetch(`/api/categories/`, {
                                            method: 'DELETE',
                                            headers: {
                                                'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify({ id: category.id }),
                                        })
                                            .then(() => {
                                                setCategories((prev) => prev.filter((c) => c.id !== category.id));
                                            });
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