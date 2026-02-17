import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full py-10 bg-white border-t border-gray-100 mt-20">
            <div className="flex flex-col items-center justify-center space-y-6">
                <h2 className="text-xl font-bold tracking-widest uppercase">Nripendra Singh</h2>

                <div className="flex space-x-6">
                    <Link href="#" className="hover:text-gray-500 transition-colors">
                        {/* Simple SVGs if react-icons not installed */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </Link>
                    <Link href="https://twitter.com" target="_blank" className="hover:text-gray-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                    </Link>
                    <Link href="mailto:contact@model.com" className="hover:text-gray-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </Link>
                </div>

                <div className="text-xs text-gray-400 uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} Nripendra Singh. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
