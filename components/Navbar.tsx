import Link from 'next/link';

export function Navbar(){
    return(
        <div className="sticky top-0 z-50">
            <ul className="flex justify-start gap-5 bg-gray-800 text-white p-4">
            <li className="hover:text-amber-200 font-extrabold border-r-2 pl-1 pr-1 border-l-2 font-mono"><Link href="/">NextIT</Link></li>
            
            <div className="ml-auto flex gap-3">
            <li className="hover:text-amber-200"><Link href="/products" prefetch={true} scroll={false}>Products</Link></li>
            <li className="hover:text-amber-200"><Link href="/cart" prefetch={true} scroll={false}>Cart</Link></li>
            <li className="hover:text-amber-200"><Link href="/support" prefetch={true} scroll={false}>Support</Link></li>
            <li className="hover:text-amber-200"><Link href="/auth/login" prefetch={true} scroll={false}>Log in</Link></li>
            <span>|</span>
            <li className="hover:text-amber-200"><Link href="/auth/signup" prefetch={true} scroll={false}>Sign up</Link></li>
            </div>
            </ul>
        </div>
    );
}