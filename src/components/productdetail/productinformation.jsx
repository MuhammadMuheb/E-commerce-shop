import React, { useState } from "react";
import ProductSpecifications from "./Productspecifications";
import RatingReviews from "./Rating&Reviews";
import FAQs from "./FAQs";

function ProductInformation() {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="max-w-[1240px] mx-auto px-4 md:px-0">
      {/* Tabs Buttons */}
      <div className="flex items-center mb-6 sm:mb-8 overflow-x-auto">
        <button
          onClick={() => setActiveTab("details")}
          className={`flex-1 p-5 sm:p-6 border-b ${
            activeTab === "details"
              ? "border-black border-b-2 font-medium text-black"
              : "border-black/10 text-black/60"
          }`}
        >
          Product Details
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`flex-1 p-5 sm:p-6 border-b ${
            activeTab === "reviews"
              ? "border-black border-b-2 font-medium text-black"
              : "border-black/10 text-black/60"
          }`}
        >
          Rating & Reviews
        </button>
        <button
          onClick={() => setActiveTab("faqs")}
          className={`flex-1 p-5 sm:p-6 border-b ${
            activeTab === "faqs"
              ? "border-black border-b-2 font-medium text-black"
              : "border-black/10 text-black/60"
          }`}
        >
          FAQs
        </button>
      </div>

      {/* Content Switch */}
      {activeTab === "details" && <ProductSpecifications />}
      {activeTab === "reviews" && <RatingReviews />}
      {activeTab === "faqs" && <FAQs />}
    </div>
  );
}

export default ProductInformation;
