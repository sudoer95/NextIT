"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddCategory() {
    const router = useRouter();
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch('/api/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        })
        .then((res) => {
            if (res.ok) {
                alert('Category added successfully');
                setName(""); // Clear the input field
                router.push('/admin/categories/');
            } else {
                alert('Failed to add category');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while adding the category');
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Add Category</h1>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Category Name"
                    className="border p-2 rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Category</button>
            </form>
        </div>
    );
}