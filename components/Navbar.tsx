"use client";
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
    { href: '/products', label: 'Products' },
    { href: '/cart', label: 'Cart' },
    { href: '/support', label: 'Support' },
    { href: '/auth/login', label: 'Log In' },
    { href: '/auth/signup', label: 'Sign up' },
];

export function Navbar(){
    const pathname = usePathname();
    return(
        <div className="sticky top-0 z-50">
            <ul className="flex justify-start gap-5 bg-gray-800 text-white p-4 items-center">
            <li className={clsx('hover:text-amber-200', {'border-b-1 border-amber-100' : pathname==='/'},)}>
                <Link className='font-extrabold border-r-2 pl-1 pr-1 border-l-2 font-mono' href="/">NextIT</Link>
            </li>
            <div className="ml-auto flex gap-3">
                {links.map((link) => (
                <li key={link.label} className="list-none">
                    <Link
                    href={link.href}
                    className={clsx(
                        'hover:text-amber-200',
                        {
                        'border-b-1 border-amber-100': pathname === link.href,
                        }
                    )}
                    >
                    {link.label}
                    </Link>
                </li>
                ))}
            </div>
            </ul>

            {/* legacy navbar */}
            {/* <ul className="flex justify-start gap-5 bg-gray-800 text-white p-4">
            <li className="hover:text-amber-200 font-extrabold border-r-2 pl-1 pr-1 border-l-2 font-mono"><Link href="/">NextIT</Link></li>
            
            <div className="ml-auto flex gap-3">
            <li className="hover:text-amber-200"><Link href="/products" prefetch={true} scroll={false}>Products</Link></li>
            <li className="hover:text-amber-200"><Link href="/cart" prefetch={true} scroll={false}>Cart</Link></li>
            <li className="hover:text-amber-200"><Link href="/support" prefetch={true} scroll={false}>Support</Link></li>
            <li className="hover:text-amber-200"><Link href="/auth/login" prefetch={true} scroll={false}>Log in</Link></li>
            <span>|</span>
            <li className="hover:text-amber-200"><Link href="/auth/signup" prefetch={true} scroll={false}>Sign up</Link></li>
            </div>
            </ul> */}
        </div>
    );
}