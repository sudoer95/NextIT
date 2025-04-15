export function Navbar(){
    return(
        <div className="sticky top-0 z-50">
            <ul className="flex justify-start gap-5 bg-gray-800 text-white p-4">
            <li className="hover:text-amber-200 font-extrabold border-r-2 border-l-2 font-mono"><a href="/">NextIT</a></li>
            <li className="hover:text-amber-200"><a href="/products">Products</a></li>
            <li className="hover:text-amber-200"><a href="/cart">Cart</a></li>
            <li className="hover:text-amber-200"><a href="/support">Support</a></li>
            <li className="hover:text-amber-200"><a href="/auth/login">Log in</a></li>
            <div className="ml-auto flex gap-2">
                <a className="hover:text-amber-200" href="/auth/login">Log in</a>
                <span>|</span>
                <a className="hover:text-amber-200" href="/auth/signup">Sign up</a>
            </div>
            </ul>
        </div>
    );
}