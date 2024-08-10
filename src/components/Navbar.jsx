"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Add this import
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Add this line

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold">Relief Compass</Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Home</Link>
                <Link href="/news" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/news' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>News</Link>
                <Link href="/map" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/map' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Camps</Link>
                <Link href="/volunteer" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/volunteer' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Volunteer</Link>
                <Link href="/guide" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/guide' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Guide</Link>
                <Link href="/disaster_prediction" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/guide' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Historical Risk</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Link href="/profile/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <UserCircleIcon className="h-8 w-8 mr-2" />
              Profile
            </Link>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Home</Link>
          <Link href="/news" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/news' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>News</Link>
          <Link href="/camps" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/camps' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Camps</Link>
          <Link href="/volunteer" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/volunteer' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Volunteer</Link>
          <Link href="/guide" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/guide' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Guide</Link>
          <Link href="/profile" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/profile' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Profile</Link>
        </div>
      </div>
    </nav>
  );
}