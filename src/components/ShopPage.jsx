import React, { useState, useEffect, useRef } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { BsSliders2Vertical, BsChevronRight, BsChevronUp } from "react-icons/bs";
import SidebarFilters from "./SidebarFilters";
import productData from "./data/ProductData.json";

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const totalPages = 10;
  const dropdownRef = useRef(null);

  const Price = [
    { name: "Most Popular" },
    { name: "Low Price" },
    { name: "High Price" },
  ];

  let products = [...productData.shoppage];

  // ✅ dropdown close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Pagination
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 xl:px-0">
      {/* Breadcrumbs */}
      <nav className="mb-5 sm:mb-9">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground sm:gap-2.5">
          <li className="inline-flex items-center gap-1.5">
            <a href="/" className="transition-colors hover:text-foreground">
              Home
            </a>
          </li>
          <li className="text-[10px]">
            <BsChevronRight />
          </li>
          <li className="inline-flex items-center gap-1.5">
            <span className="font-normal text-foreground">Shop</span>
          </li>
        </ol>
      </nav>
      <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />

      {/* Main Layout */}
      <div className="flex md:space-x-5 items-start">
        {/* Sidebar (Mobile = Slide in / Desktop = Static) */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:static md:translate-x-0`}
        >
          <SidebarFilters
  isSidebarOpen={isSidebarOpen}   
    onClose={() => setIsSidebarOpen(false)}
/>

        </div>

        {/* Products Section */}
        <div className="flex flex-col w-full space-y-5">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-2xl md:text-[32px]">Casual</h1>

              {/* Mobile filter button */}
              <button
                type="button"
                onClick={() => setIsSidebarOpen(true)}
                className="h-8 w-8 rounded-full bg-[#F0F0F0] text-black p-1 md:hidden"
              >
                <BsSliders2Vertical className="text-base mx-auto" />
              </button>
            </div>

            {/* Sort By */}
            <div className="flex flex-col sm:items-center sm:flex-row">
              <span className="text-sm md:text-base text-black/60 mr-3">
                Showing 1-10 of 100 Products
              </span>

              <div className="relative flex items-center" ref={dropdownRef}>
                Sort by:
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex h-9 items-center justify-between whitespace-nowrap rounded-md py-2 px-1.5 font-medium text-sm sm:text-base w-fit text-black"
                >
                  {selectedPrice ? selectedPrice.name : "Most Popular"}
                  <BsChevronUp
                    className={`ml-2 text-sm transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-40 rounded-md border border-gray-200 bg-white shadow-md z-10">
                    {Price.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedPrice(option);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                state={{ product }}
                className="flex flex-col items-start aspect-auto"
              >
                <div className="bg-[#F0EEED] rounded-[13px] overflow-hidden">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${product.img}`}
                    alt={product.title}
                    className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
                  />
                </div>
                <strong className="text-black xl:text-xl">{product.title}</strong>

                <div className="flex items-end mb-1 xl:mb-2">
                  <Rating
                    style={{ fontSize: "19px" }}
                    value={product.rating}
                    precision={0.5}
                    readOnly
                  />
                  <span className="text-black text-xs xl:text-sm ml-2">
                    {product.rating}/5
                  </span>
                </div>

                <div className="flex items-center space-x-[5px] xl:space-x-2.5">
                  <span className="font-bold text-black text-xl xl:text-2xl">
                    ${product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="font-bold text-black/40 line-through text-xl xl:text-2xl">
                      ${product.oldPrice}
                    </span>
                  )}
                  {product.discount && (
                    <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
                      {product.discount}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center space-x-3 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="px-2 py-1">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

{isSidebarOpen && (
  <div
    onClick={() => setIsSidebarOpen(false)}
    className="fixed inset-0 bg-black/40 z-40 md:hidden"
  ></div>
)}
    </div>
  );
};

export default ShopPage;
