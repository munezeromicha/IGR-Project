"use client"

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle scroll effect with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const isScrolled = window.scrollY > 10;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      }, 100);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [scrolled]);

  // Navigation links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  // Handle navigation with loading state
  const handleNavigation = (href: string) => {
    if (pathname === href) return;
    setIsNavigating(true);
    router.push(href);
  };

  // Reset navigation state when route changes
  useEffect(() => {
    setIsNavigating(false);
    setIsOpen(false);
  }, [pathname]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className={`flex items-center text-2xl font-bold ${scrolled ? 'text-green-800' : 'text-white'}`}
            prefetch={true}
          >
            <span>IGR</span>
            <span className={`ml-2 ${scrolled ? 'text-green-600' : 'text-green-300'}`}>Ltd</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                prefetch={true}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(link.href);
                }}
                className={`font-medium transition-colors duration-300 ${
                  isNavigating ? 'opacity-50' : 'opacity-100'
                } ${
                  pathname === link.href 
                    ? (scrolled ? 'text-green-600' : 'text-green-300')
                    : (scrolled ? 'text-gray-800 hover:text-green-600' : 'text-white hover:text-green-300')
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              prefetch={true}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/contact');
              }}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                isNavigating ? 'opacity-50' : 'opacity-100'
              } ${
                scrolled 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-green-800'
              }`}
            >
              Request a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className={scrolled ? 'text-gray-800' : 'text-white'} size={24} />
            ) : (
              <FaBars className={scrolled ? 'text-gray-800' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-40 bg-green-800 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              prefetch={true}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.href);
              }}
              className={`text-white text-xl py-4 border-b border-green-700 ${
                pathname === link.href ? 'font-bold' : 'font-medium'
              } ${isNavigating ? 'opacity-50' : 'opacity-100'}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <Link
              href="/contact"
              prefetch={true}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/contact');
              }}
              className={`block w-full text-center bg-white hover:bg-gray-100 text-green-800 font-bold py-3 px-6 rounded-full transition duration-300 ${
                isNavigating ? 'opacity-50' : 'opacity-100'
              }`}
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;