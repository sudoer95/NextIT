"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EditCategory() {
    const { id } = useParams();
    const [name, setName] = useState("");

    useEffect(() => {
        fetch(`/api/categories?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setName(data.name);
                } else {
                    alert("Category not found");
                }
            });
    }, [id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`/api/categories`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, name }),
        })
        .then((res) => {
            if (res.ok) {
                alert('Category updated successfully');
            } else {
                alert('Failed to update category');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while updating the category');
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Edit Category</h1>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input
                    defaultValue={name}
                    type="text"
                    placeholder="Category Name"
                    className="border p-2 rounded"
                    
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Category</button>
            </form>
        </div>
    );
}
