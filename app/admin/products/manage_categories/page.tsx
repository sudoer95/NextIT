"use client";
import { useState, useEffect } from "react";

export default function ManageCategories() {
    const [categories, setCategories] = useState<{ id: number, name: string}[]>([]);
    const [categoryName, setCategoryName] = useState("");
    function fetchCategories() {
        fetch("/api/categories")
            .then((res) => res.json())
            .then((data) => setCategories(Array.isArray(data) ? data : []));
    }
    function createCategory() {
        const data = {
            name: categoryName,
        };
        fetch("/api/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (res.ok) {
                    alert("Category created successfully");
                    fetchCategories();
                } else {
                    alert("Failed to create category");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred while creating the category");
            });
    }
    function deleteCategory(id: number) {
        fetch(`/api/categories/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.ok) {
                    alert("Category deleted successfully");
                    fetchCategories();
                } else {
                    alert("Failed to delete category");
                }
            })
            .catch((error) => {
                console.error(error);
                alert("An error occurred while deleting the category");
            });
    }
    function updateCategory(id: number, name: string) {
        fetch(`/api/categories/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
        })
            .then((res) => {
                if (res.ok) {
                    alert("Category updated successfully");
                    fetchCategories();
                } else {
                    alert("Failed to update category");
                }
            })
            .catch((error) => {
                console.error(error);
                alert("An error occurred while updating the category");
            });
    }

    useEffect(() => {
        fetchCategories();

    }
    , []);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Create Category</h1>
            <form className="flex flex-col space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const data = {
                    name: categoryName,
                };
                fetch('/api/categories', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then((res) => {
                    if (res.ok) {
                        alert('Category created successfully');
                        fetchCategories();
                    } else {
                        alert('Failed to create category');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('An error occurred while creating the category');
                });
            }
            }>
                <input type="text" placeholder="Category Name" className="border p-2 rounded" name='name' value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Category</button>
            </form>
            <div className="mt-4">
                <h2 className="text-2xl font-bold mb-2">Existing Categories</h2>
                <ul className="list-disc pl-5">
                    {categories.map((category) => (
                        <li key={category.id} className="mb-1">
                            {category.name}
                            <button
                                className="bg-red-500 text-white rounded ml-2"
                                onClick={() => {
                                    fetch(`/api/categories/${category.id}`, {
                                        method: "DELETE",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                    })
                                        .then((res) => {
                                            if (res.ok) {
                                                alert("Category deleted successfully");
                                                fetchCategories();
                                            } else {
                                                alert("Failed to delete category");
                                            }
                                        })
                                        .catch((error) => {
                                            console.error(error);
                                            alert("An error occurred while deleting the category");
                                        });
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}