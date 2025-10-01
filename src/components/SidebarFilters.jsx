import React, { useState } from "react";
import {
  BsSliders2Vertical,
  BsChevronRight,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";
import Slider from "@mui/material/Slider";
import { FaCheck } from "react-icons/fa"; // tick icon

function SidebarFilters({ isSidebarOpen, onClose }) {
  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

  const [value, setValue] = useState([0, 200]);
  const [openSections, setOpenSections] = useState({
    price: true,
    colors: true,
    size: true,
    style: true,
  });

  const colors = [
    "bg-green-600",
    "bg-red-600",
    "bg-yellow-300",
    "bg-orange-600",
    "bg-cyan-400",
    "bg-blue-600",
    "bg-purple-600",
    "bg-pink-600",
    "bg-white",
    "bg-black",
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div
      className={`
        fixed inset-y-0 botton-0 z-50 w-72 transform bg-white shadow-lg transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0 md:min-w-[295px] md:max-w-[295px] md:border md:border-black/10 md:rounded-[20px]
        px-5 md:px-6 py-5 space-y-5 md:space-y-6
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-black text-xl">Filters</span>
        <BsSliders2Vertical
          onClick={onClose}
          className="text-2xl text-black/40 cursor-pointer "
        />
      </div>
      <hr className="border-t-black/10" />

      {/* Price Filter */}
      <div>
        <div
          className="border-b border-none"
          onClick={() => toggleSection("price")}
        >
          <h3 className="flex">
            <button className="flex flex-1 items-center justify-between transition-all text-black font-bold text-xl p-0 py-0.5">
              Price
              {openSections.price ? (
                <BsChevronUp style={{ fontSize: "13px" }} />
              ) : (
                <BsChevronDown style={{ fontSize: "13px" }} />
              )}
            </button>
          </h3>
        </div>

        {openSections.price && (
          <div className="text-sm font-bold">
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={0}
              max={250}
              sx={{ color: "black" }}
            />
            <div className="flex justify-between">
              <span>${value[0]}</span>
              <span>${value[1]}</span>
            </div>
          </div>
        )}
      </div>

      <hr className="border-t-black/10" />

      {/* Colors */}
      <div>
        <div
          className="border-b border-none"
          onClick={() => toggleSection("colors")}
        >
          <h3 className="flex">
            <button className="flex flex-1 items-center justify-between text-black font-bold text-xl p-0 py-0.5">
              Colors
              {openSections.colors ? (
                <BsChevronUp style={{ fontSize: "13px" }} />
              ) : (
                <BsChevronDown style={{ fontSize: "13px" }} />
              )}
            </button>
          </h3>
        </div>
        {openSections.colors && (
          <div className="pt-4 grid grid-cols-5 gap-2.5">
            {colors.map((color, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedColor(color)}
                className={`${color} rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20`}
              >
                {selectedColor === color && (
                  <FaCheck
                    style={{ fontSize: "12px" }}
                    className="text-white"
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <hr className="border-t-black/10" />

      {/* Sizes */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("size")}
        >
          <h3 className="text-black font-bold text-xl">Size</h3>
          {openSections.size ? (
            <BsChevronUp style={{ fontSize: "13px" }} />
          ) : (
            <BsChevronDown style={{ fontSize: "13px" }} />
          )}
        </div>

        {openSections.size && (
          <div className="pt-4 flex flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[40px] font-medium
                  ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      <hr className="border-t-black/10" />

      {/* Dress Style */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("style")}
        >
          <h3 className="text-black font-bold text-xl">Dress Style</h3>
          {openSections.style ? (
            <BsChevronUp style={{ fontSize: "13px" }} />
          ) : (
            <BsChevronDown style={{ fontSize: "13px" }} />
          )}
        </div>

        {openSections.style && (
          <div className="pt-4 flex flex-col text-black/60 space-y-0.5">
            {["Casual", "Formal", "Party", "Gym"].map((style) => (
              <a
                key={style}
                href="#"
                className="flex items-center justify-between py-2 hover:text-black"
              >
                {style}
                <BsChevronRight
                  className="text-lg"
                  style={{ fontSize: "12px" }}
                />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Apply Button */}
      <button
        type="button"
        className="inline-flex items-center justify-center text-white shadow px-4 bg-black w-full rounded-full text-sm font-medium py-4 h-12"
      >
        Apply Filter
      </button>
    </div>
  );
}

export default SidebarFilters;
