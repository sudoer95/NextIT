import { FetchUser, FetchAllUsers, CreateUser, UpdateUser, DeleteUser, CheckIfEmailUsed } from "@/lib/queries/users";
import { Check } from "lucide-react";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (id) {
            const user = await FetchUser(Number(id));
            return NextResponse.json(user);
        } else {
            const users = await FetchAllUsers();
            return NextResponse.json(users);
        }
    } catch (e) {
        return NextResponse.json({ error: "Error fetching user(s)", e }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { name, email, password, role } = await request.json();
        const used = await CheckIfEmailUsed(email);
        if (used) {
            return NextResponse.json({ error: "Email already used" }, { status: 409 });
        } else {
            await CreateUser(name, email, password, role);
            return NextResponse.json({ message: "User created successfully" });
        }
    } catch (e) {
        return NextResponse.json({ error: "Error creating user", e }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { id, name, email, password, role } = await request.json();
        await UpdateUser(id, name, email, password, role);
        return NextResponse.json({ message: "User updated successfully" });
    } catch (e) {
        return NextResponse.json({ error: "Error updating user", e }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        await DeleteUser(id);
        return NextResponse.json({ message: "User deleted successfully" });
    } catch (e) {
        return NextResponse.json({ error: "Error deleting user", e }, { status: 500 });
    }
}