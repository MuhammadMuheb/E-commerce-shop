import React, { useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Search from "./images/search.jpg";
import Cart from "./images/cart.jpg";
import User from "./images/user.jpg";
import Searchblack from "./images/search-black.jpg";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [shoppageOpen, setshoppageOpen] = useState(false); 
  const { totalItems } = useCart();
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
            <NavLink className="text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10 font-black " to="/home">
              SHOP.CO
            </NavLink>
          </div>
          <nav className="relative z-100 max-w-max flex-1 items-center justify-center hidden md:flex mr-2 lg:mr-7">
            <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
              <li className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="igroup inline-flex h-9 w-max items-center justify-center rounded-md bg-background py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group font-normal px-3">
                  Shop{" "}
                  <FaAngleDown className={`ml-1 h-3 w-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full mt-1.5 bg-white shadow-lg rounded-md z-5000">
                    <ul className="grid w-[400px] md:w-[500px] lg:w-[600px] md:grid-cols-2 gap-3 p-4 z-5000">
                      <li>
                        <NavLink to="/shoppage#men-clothes" className="block p-3 hover:bg-gray-100">
                          <div className="text-sm font-medium">Men's Clothes</div>
                          <p className="text-sm text-gray-500">
                            In attractive and spectacular colors and designs
                          </p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/shoppage#women-clothes" className="block p-3 hover:bg-gray-100">
                          <div className="text-sm font-medium">Women's Clothes</div>
                          <p className="text-sm text-gray-500">
                            Ladies, your style and tastes are important to us
                          </p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/shoppage#kids-clothes" className="block p-3 hover:bg-gray-100">
                          <div className="text-sm font-medium">Kids Clothes</div>
                          <p className="text-sm text-gray-500">
                            For all ages, with happy and beautiful colors
                          </p>
                        </NavLink>
                      </li>
                      <li>
                        <a href="/shoppage#bag-shoes" className="block p-3 hover:bg-gray-100">
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
              <li><NavLink to="/shoppage#on-sale" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 font-normal px-3">On Sale</NavLink></li>
              <li><NavLink to="/shoppage#new-arrivals" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 font-normal px-3">New Arrivals</NavLink></li>
              <li><NavLink to="/shoppage#brands" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 font-normal px-3">Brands</NavLink></li>
            </ul>
          </nav>
          <div className="input-group focus-within:shadow-lg pl-4 transition-all relative items-center w-full rounded-full overflow-hidden hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-10">
            <img src={Search} alt="search" width="20" height="20" className="mr-3"/>
            <input
              type="search"
              placeholder="Search for products..."
              className="input-control w-full py-3 pr-4 outline-none placeholder:font-normal placeholder:text-sm bg-transparent placeholder:text-black/40"
            />
          </div>
          <div className="flex items-center">
            <NavLink className="block md:hidden mr-[14px] p-1" to="/search">
              <img src={Searchblack} alt="search" className="max-w-[22px] max-h-[22px]" />
            </NavLink>
            <NavLink className="relative mr-[14px] p-1" to="/yourcart">
              <img src={Cart} alt="cart" className="max-w-[22px] max-h-[22px]"/>
              {totalItems > 0 && (
                <span className="border bg-black text-white rounded-full px-1 text-xs absolute -top-3 left-1/2 -translate-x-1/2">
                  {totalItems}
                </span>
              )}
            </NavLink>
            <NavLink className="p-1" to="/home">
              <img src={User} alt="user" className="max-w-[22px] max-h-[22px]"/>
            </NavLink>
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
               <NavLink className="text-2xl font-bold" to="/home">SHOP.CO</NavLink>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="w-full">
                <button onClick={() => setshoppageOpen(!shoppageOpen)} className="flex w-full items-center justify-between text-base font-normal" >
                  Shop
                  <FaAngleDown className={`h-4 w-4 transition-transform ${ shoppageOpen ? "rotate-180" : "" }`} />
                </button>
                {shoppageOpen && (
                  <div className="mt-2 pl-4 space-y-2 text-sm">
                    <NavLink to="/shoppage#men-clothes" className="block py-1">Men’s Clothes</NavLink>
                    <NavLink to="/shoppage#women-clothes" className="block py-1">Women’s Clothes</NavLink>
                    <NavLink to="/shoppage#kids-clothes" className="block py-1">Kids Clothes</NavLink>
                    <NavLink to="/shoppage#bag-shoes" className="block py-1">Bags & Shoes</NavLink>
                  </div>
                )}
              </div>
              <NavLink to="/shoppage#on-sale">On Sale</NavLink>
              <NavLink to="/shoppage#new-arrivals">New Arrivals</NavLink>
              <NavLink to="/shoppage#brands">Brands</NavLink>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
