// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';


const Navbar: React.FC = () => {
    return (
        <div>
            {/* Main Container for Logo and Navigation Links */}
            <div className="bg-yellow-800 p-4 fixed w-full top-0 left-0 z-8">
                <div className="container mx-auto flex justify-between items-center h-6">
                    {/* Logo */}
                    <Link href="/">
                        <img
                            src="/logo.jpeg"
                            alt="Logo"
                            className="h-12 w-14 cursor-pointer"
                        />
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex flex-grow justify-center space-x-4">
                        <Link href="/">
                            <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</span>
                        </Link>
                        <Link href="/about">
                            <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</span>
                        </Link>
                        <Link href="/services">
                            <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</span>
                        </Link>
                        <Link href="/contact">
                            <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white focus:outline-none ml-4" id="menu-button">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden hidden" id="menu">
                    <Link href="/">
                        <span className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Home</span>
                    </Link>
                    <Link href="/about">
                        <span className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">About</span>
                    </Link>
                    <Link href="/services">
                        <span className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Services</span>
                    </Link>
                    <Link href="/contact">
                        <span className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Contact</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
