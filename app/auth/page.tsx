export default function AuthPage() {
    return (
        <main className="flex flex-col items-center justify-center p-4">
            <br />
        <h1 className="text-2xl font-bold mb-4 font-mono">Authentication</h1>
        <div className="flex gap-4">
            <a href="/auth/login" className="px-4 py-2 bg-gray-800 text-white rounded">Log In</a>
            <a href="/auth/signup" className="px-4 py-2 bg-blue-500 text-white rounded">Sign Up</a>
        </div>
        </main>
    );
}