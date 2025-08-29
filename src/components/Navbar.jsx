import React, { useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Search from "./images/search.jpg";
import Cart from "./images/cart.jpg";
import User from "./images/user.jpg";
import Searchblack from "./images/search-black.jpg";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [shopOpen, setShopOpen] = useState(false); 

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 px-2 sm:px-4 xl:px-0">
        <div className="relative max-w-7xl mx-auto leading-6 sm:leading-5">
          <p className="text-xs sm:text-[.880rem] font-['Satoshi_Neue',_Satoshi,_Arial,_sans-serif] leading-6 sm:leading-5">
            Sign up and get 20% off to your first order.{" "}
            <a className="underline font-medium" href="#">
              Sign Up Now
            </a>
          </p>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 p-1 hidden sm:flex">
            <IoMdClose />
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 bg-white z-20 py-1 px-1">
        <div className="flex max-w-[1240px] mx-auto items-center justify-between md:justify-start py-5 px-4 xl:px-0">
          <div className="flex items-center">
            <div className="block md:hidden mr-4">
              <FaBars onClick={() => setSidebarOpen(true)} className="cursor-pointer max-w-[22px] max-h-[22px]" />
            </div>
            <a className="text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10 font-black" href="/" >
              SHOP.CO
            </a>
          </div>
          <nav className="relative z-10 flex-1 hidden md:flex mr-2 lg:mr-7 justify-center">
            <ul className="flex items-center space-x-4">
              <li className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="inline-flex items-center px-3 py-2 text-sm">
                  Shop{" "}
                  <FaAngleDown className={`ml-1 h-3 w-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full mt-1.5 bg-white shadow-lg rounded-md">
                    <ul className="grid w-[400px] md:w-[500px] lg:w-[600px] md:grid-cols-2 gap-3 p-4">
                      <li>
                        <a href="/shop#men-clothes" className="block p-3 hover:bg-gray-100">
                          <div className="text-sm font-medium">Men's Clothes</div>
                          <p className="text-sm text-gray-500">
                            In attractive and spectacular colors and designs
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="/shop#women-clothes" className="block p-3 hover:bg-gray-100">
                          <div className="text-sm font-medium">Women's Clothes</div>
                          <p className="text-sm text-gray-500">
                            Ladies, your style and tastes are important to us
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="/shop#kids-clothes" className="block p-3 hover:bg-gray-100">
                          <div className="text-sm font-medium">Kids Clothes</div>
                          <p className="text-sm text-gray-500">
                            For all ages, with happy and beautiful colors
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="/shop#bag-shoes" className="block p-3 hover:bg-gray-100">
                          <div className="text-sm font-medium">Bags & Shoes</div>
                          <p className="text-sm text-gray-500">
                            Suitable for men, women and all tastes and styles
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li><a href="/shop#on-sale" className="px-3 py-2 text-sm">On Sale</a></li>
              <li><a href="/shop#new-arrivals" className="px-3 py-2 text-sm">New Arrivals</a></li>
              <li><a href="/shop#brands" className="px-3 py-2 text-sm">Brands</a></li>
            </ul>
          </nav>
          <div className="hidden md:flex bg-[#F0F0F0] rounded-full px-4 mr-3 lg:mr-10 w-full max-w-sm items-center">
            <img src={Search} alt="search" width="20" height="20" className="mr-3"/>
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full py-3 bg-transparent outline-none placeholder:text-black/40"
            />
          </div>
          <div className="flex items-center">
            <a className="block md:hidden mr-[14px] p-1" href="/search">
              <img src={Searchblack} alt="search" className="max-w-[22px] max-h-[22px]" />
            </a>
            <a className="relative mr-[14px] p-1" href="/cart">
              <img src={Cart} alt="cart" className="max-w-[22px] max-h-[22px]"/>
              <span className="border bg-black text-white rounded-full px-1 text-xs absolute -top-3 left-1/2 -translate-x-1/2">
                0
              </span>
            </a>
            <a className="p-1" href="/#signin">
              <img src={User} alt="user" className="max-w-[22px] max-h-[22px]"/>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {sidebarOpen && (
        <>
          <div data-state="open" className="fixed inset-0 z-40 bg-black/80" onClick={() => setSidebarOpen(false)} />
          <div role="dialog" className="fixed z-50 bg-white p-6 shadow-lg inset-y-0 left-0 h-full w-3/4 sm:max-w-sm overflow-y-auto transition-transform">
            <button type="button" className="absolute right-4 top-4" onClick={() => setSidebarOpen(false)} >
              <IoMdClose />
            </button>
            <div className="mb-10">
              <a className="text-2xl font-bold" href="/">
                SHOP.CO
              </a>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="w-full">
                <button onClick={() => setShopOpen(!shopOpen)} className="flex w-full items-center justify-between text-base font-normal" >
                  Shop
                  <FaAngleDown className={`h-4 w-4 transition-transform ${ shopOpen ? "rotate-180" : "" }`} />
                </button>
                {shopOpen && (
                  <div className="mt-2 pl-4 space-y-2 text-sm">
                    <a href="/shop#men-clothes" className="block">Men’s Clothes</a>
                    <a href="/shop#women-clothes" className="block">Women’s Clothes</a>
                    <a href="/shop#kids-clothes" className="block">Kids Clothes</a>
                    <a href="/shop#bag-shoes" className="block">Bags & Shoes</a>
                  </div>
                )}
              </div>
              <a href="/shop#on-sale">On Sale</a>
              <a href="/shop#new-arrivals">New Arrivals</a>
              <a href="/shop#brands">Brands</a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
