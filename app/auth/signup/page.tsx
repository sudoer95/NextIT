export default function SingUpPage() {
    return (
        <main className="flex flex-col items-center justify-center p-4">
            <br />
            <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
            <form className="flex flex-col gap-4 w-full max-w-sm">
                <input
                    type="text"
                    placeholder="Username"
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border border-gray-300 rounded"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                    Sign Up
                </button>
            </form>
        </main>
    );
}