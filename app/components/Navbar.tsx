import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="w-full py-3 md:py-6 px-4 md:px-10 flex justify-center items-center bg-white sticky top-0 z-50 border-b border-transparent">
            <div className="flex space-x-6 md:space-x-12 text-[10px] md:text-sm font-medium uppercase tracking-widest">
                <Link href="/" className="hover:text-gray-500 transition-colors">Home</Link>
                <Link href="/#about" className="hover:text-gray-500 transition-colors">About</Link>
                <Link href="/portfolio" className="hover:text-gray-500 transition-colors">Portfolio</Link>
                <Link href="/contact" className="hover:text-gray-500 transition-colors">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
