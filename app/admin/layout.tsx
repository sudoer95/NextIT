import '../globals.css';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <nav className="w-full bg-white shadow">
                <div className="container mx-auto px-4 py-2">
                    <ul className="flex justify-center space-x-6">
                        <li>
                            <Link href="/admin" className="text-gray-700 hover:text-blue-500 font-medium">Overview</Link>
                        </li>
                        <li>
                            <Link href="/admin/products" className="text-gray-700 hover:text-blue-500 font-medium">Products</Link>
                        </li>
                        <li>
                            <Link href="/admin/users" className="text-gray-700 hover:text-blue-500 font-medium">Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {children}
        </div>
    );
  }