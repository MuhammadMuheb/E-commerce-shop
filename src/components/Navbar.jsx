import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import menu from "./images/menu.png";
import Search from "./images/search.jpg";
import Cart from "./images/cart.jpg";
import User from "./images/user.jpg";
import Searchblack from "./images/search-black.jpg";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 px-2 sm:px-4 xl:px-0 md-h[auto]">
        <div className="relative max-w-7xl mx-auto leading-6 sm:leading-5">
          <p className="text-xs sm:text-[.880rem]  font-['Satoshi_Neue',_Satoshi,_Arial,_sans-serif] leading-6 sm:leading-5">
            Sign up and get 20% off to your first order.{" "}
            <a className="underline font-medium" href="#">
              Sign Up Now
            </a>
          </p>
          <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground hover:bg-transparent absolute right-0 top-1/2 -translate-y-1/2 w-fit h-fit p-1 hidden sm:flex button">
            <IoMdClose />
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 bg-white z-20 py-1 px-1">
        <div className=" flex max-w-[1240px]  relative mx-auto items-center justify-between md:justify-start py-5 md:py-5  px-4 xl:px-0">
          
          {/* Left Section (Logo + Mobile Menu) */}
          <div className="flex items-center">
            <div className="block md:hidden mr-4">
              <img className="cursor-pointer max-w-[22px] max-h-[22px]" src={menu} alt="Menu" />
            </div>
            <a
              className="text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10 font-black"
              href="/"
            >
              SHOP.CO
            </a>
          </div>

          {/* Center Menu */}
          <nav className="relative z-10 max-w-max flex-1 items-center justify-center hidden md:flex mr-2 lg:mr-7">
            <ul className="flex list-none items-center justify-center space-x-4">
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-normal"
                >
                  Shop{" "}
                  <FaAngleDown
                    className={`ml-1 h-3 w-3 transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute left-0 top-full flex justify-center">
                    <div className="relative mt-1.5 w-full md:w-[600px] overflow-hidden rounded-md border bg-white shadow-lg">
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li>
                          <a
                            href="/shop#men-clothes"
                            className="block space-y-1 rounded-md p-3 transition-colors hover:bg-gray-100"
                          >
                            <div className="text-sm font-medium">Men's Clothes</div>
                            <p className="line-clamp-2 text-sm text-gray-500">
                              In attractive and spectacular colors and designs
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/shop#women-clothes"
                            className="block space-y-1 rounded-md p-3 transition-colors hover:bg-gray-100"
                          >
                            <div className="text-sm font-medium">Women's Clothes</div>
                            <p className="line-clamp-2 text-sm text-gray-500">
                              Ladies, your style and tastes are important to us
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/shop#kids-clothes"
                            className="block space-y-1 rounded-md p-3 transition-colors hover:bg-gray-100"
                          >
                            <div className="text-sm font-medium">Kids Clothes</div>
                            <p className="line-clamp-2 text-sm text-gray-500">
                              For all ages, with happy and beautiful colors
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/shop#bag-shoes"
                            className="block space-y-1 rounded-md p-3 transition-colors hover:bg-gray-100"
                          >
                            <div className="text-sm font-medium">Bags & Shoes</div>
                            <p className="line-clamp-2 text-sm text-gray-500">
                              Suitable for men, women and all tastes and styles
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <a href="#" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 font-normal px-3">On Sale</a>
              </li>
              <li>
                <a href="#" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 font-normal px-3">New Arrivals</a>
              </li>
              <li>
                <a href="#" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 font-normal px-3">Brands</a>
              </li>
            </ul>
          </nav>
          <div className="input-group focus-within:shadow-lg pl-4 transition-all relative items-center w-full rounded-full overflow-hidden hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-10">
            <div className="input-group-text mr-3">
              <img src={Search} alt="search" width="20" height="20" className="min-w-5 min-h-5 bg-transparent" />
            </div>
            <input type="search" name="search" placeholder="Search for products..." autoComplete="off" autoCorrect="off" spellCheck="false" className="input-control w-full py-3 pr-4 outline-none placeholder:font-normal placeholder:text-sm bg-transparent placeholder:text-black/40"/>
          </div>
          <div className="flex items-center">
            {/* Mobile Search */}
            <a className="block md:hidden mr-[14px] p-1" href="/search">
              <img src={Searchblack} alt="search" width="100" height="100" className="max-w-[22px] max-h-[22px]" />
            </a>

            {/* Cart with Badge */}
            <a className="relative mr-[14px] p-1" href="/cart">
              <img src={Cart} alt="cart" width="100" height="100" className="max-w-[22px] max-h-[22px]"/>
              <span className="border bg-black text-white rounded-full px-1 text-xs absolute -top-3 left-1/2 -translate-x-1/2">
                0
              </span>
            </a>
            {/* User Profile */}
            <a className="p-1" href="/#signin">
              <img src={User} alt="user" width="100" height="100" className="max-w-[22px] max-h-[22px]"/>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
