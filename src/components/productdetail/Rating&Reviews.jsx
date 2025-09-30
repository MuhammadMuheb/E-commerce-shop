import React, { useState, useEffect } from "react";
import { HiOutlineChevronDown ,HiEllipsisHorizontal } from "react-icons/hi2";
import { FaCheckCircle} from "react-icons/fa";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

function RatingReviews() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Latest");
  const [reviewsData, setReviewsData] = useState([]);

  const options = ["Latest", "Most Relevant", "Oldest"];

  useEffect(() => {
    fetch(
      "https://ecommerce-shop-d11c2-default-rtdb.firebaseio.com/reviewsData.json"
    )
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          // Firebase سے array بناؤ
          const arr = Object.keys(result).map((key) => ({
            id: key,
            ...result[key],
          }));
          setReviewsData(arr);
        }
      });
  }, []); // ✅ empty dependency array

  const handleSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="mb-12 sm:mb-16 relative">
      <section>
        {/* Header */}
        <div className="flex items-center justify-between flex-col sm:flex-row mb-5 sm:mb-6">
          <div className="flex items-center mb-4 sm:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold text-black mr-2">
              All Reviews
            </h3>
            <span className="text-sm sm:text-base text-black/60">
              ({reviewsData.length})
            </span>
          </div>

          <div className="flex items-center space-x-2.5 relative">
            {/* Dropdown Button */}
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between min-w-[140px] px-4 py-3 sm:px-5 sm:py-4 rounded-full bg-[#F0F0F0] text-black font-medium text-xs sm:text-base h-12"
            >
              <span>{selectedOption}</span>
              <HiOutlineChevronDown
                className={`h-4 w-4 ml-2 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-14 right-0 w-[180px] bg-white shadow-lg border rounded-lg z-20">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      selectedOption === option ? "font-semibold" : ""
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {/* Write a Review Button */}
            <button
              className="inline-flex items-center justify-center sm:min-w-[166px] px-4 py-3 sm:px-5 sm:py-4 rounded-full bg-black text-white font-medium text-xs sm:text-base h-12"
              type="button"
            >
              Write a Review
            </button>
          </div>
        </div>

        {/* Reviews List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 sm:mb-9">
          {reviewsData.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              state={{ product: item }}
              className="block"
            >
              <div className="relative bg-white flex flex-col items-start aspect-auto border border-black/10 rounded-[20px] p-6 sm:px-8 sm:py-7 overflow-hidden">
                <div className="flex items-center justify-between w-full mb-4">
                  <Rating value={item.rating || 5} readOnly />
                  <button className="text-black/40 text-[40px]"><HiEllipsisHorizontal/></button>
                </div>
                <div className="flex items-center mb-2 sm:mb-3">
                  <strong className="text-black sm:text-xl mr-1">
                    {item.name}
                  </strong>
                  <FaCheckCircle className="text-[#01AB31] text-xl sm:text-2xl" />

                </div>
                <p className="text-sm sm:text-base text-black/60">
                  {item.text}
                </p>
                <p className="text-sm sm:text-base text-black/60">
                  {item.review}
                </p>
                <p className="text-black/60 text-sm font-medium mt-4 sm:mt-6">
                  Posted on {item.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full px-4 sm:px-0 text-center" bis_skin_checked={1}>
          <a
            className=" w-[250px] px-11 py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-[600] text-sm sm:text-base border-black/10"
            href="#"
          >
            Load More Reviews
          </a>
        </div>
 
      </section>
    </div>
  );
}

export default RatingReviews;
