import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Logo from '../images/logo.png';


const Navbar = () => {
  const [showPages, setShowPages] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white px-6 py-5 relative z-20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          {/* <a href="#" className="hover:text-yellow-200">Sakshi Nursery</a> */}
         <img src={Logo} alt="Description of image" className="w-38 h-12" />
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#" className="hover:text-yellow-200 font-semibold">Home</a>
          <a href="#" className="hover:text-yellow-200 font-semibold">Plant</a>
          <a href="#" className="hover:text-yellow-200 font-semibold">Book Now</a>
          <a href="#" className="hover:text-yellow-200 font-semibold">Team</a>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowPages(!showPages)}
              className="hover:text-yellow-200 font-semibold"
            >
              Pages ▾
            </button>
            {showPages && (
              <div className="absolute top-full mt-2 bg-white text-black rounded shadow-md z-10 w-35">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Our Delivery</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Infrastructure</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">My Orders</a>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <button className="hover:text-yellow-200 ms-5">
            <ShoppingCart size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-green-800 text-white transform transition-transform duration-300 ease-in-out z-30
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-green-600">
          <div className="text-xl font-bold">Menu</div>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-6 mt-4">
          <a href="#" className="hover:text-yellow-200">Home</a>
          <a href="#" className="hover:text-yellow-200">Plant</a>
          <a href="#" className="hover:text-yellow-200">Book Now</a>
          <a href="#" className="hover:text-yellow-200">Team</a>

          {/* Pages with nested links */}
          <div>
            <button
              onClick={() => setShowPages(!showPages)}
              className="w-full text-left hover:text-yellow-200 font-semibold flex justify-between items-center"
            >
              Pages ▾
            </button>
            {showPages && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                <a href="#" className="hover:text-yellow-200">Contact</a>
                <a href="#" className="hover:text-yellow-200">About Us</a>
                <a href="#" className="hover:text-yellow-200">Our Delivery</a>
                <a href="#" className="hover:text-yellow-200">Infrastructure</a>
                <a href="#" className="hover:text-yellow-200">My Orders</a>
              </div>
            )}
          </div>

          {/* Cart */}
          <button className="hover:text-yellow-200 flex items-center gap-2 mt-4">
            <ShoppingCart size={24} />
            Cart
          </button>
        </nav>
      </div>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
