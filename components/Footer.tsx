// components/Footer.tsx
import { FC } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: FC = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ishami Green Rock Ltd</h3>
            <p className="mb-4 text-green-200">
              Transforming agriculture in Rwanda through innovation and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-300 transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300 transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300 transition-colors duration-300">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/"
                  className="text-green-200 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className="text-green-200 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-green-200 hover:text-white transition-colors duration-300"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-green-200 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/services"
                  className="text-green-200 hover:text-white transition-colors duration-300"
                >
                  Seedling Production
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-green-200 hover:text-white transition-colors duration-300"
                >
                  Extension & Consultancy
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-green-200 hover:text-white transition-colors duration-300"
                >
                  Market Linkage
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-green-200 hover:text-white transition-colors duration-300"
                >
                  Environmental Protection
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-green-300" />
                <span>+250 784 096 101</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-green-300" />
                <span>info@ishamigreenrock.rw</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-green-300" />
                <span>Kigali, Rwanda</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-green-800 my-8"></div>
        
        {/* Copyright */}
        <div className="text-center text-green-200">
          <p>&copy; {currentYear} Ishami Green Rock Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;