import React, { useRef } from "react";
import { FaCheckCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";

// react-slick css imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Alex K.",
    rating: 5,
    icon: <FaCheckCircle className="text-[#01AB31] text-xl sm:text-2xl" />,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: 2,
    name: "Sarah M.",
    rating: 5,
    icon: <FaCheckCircle className="text-[#01AB31] text-xl sm:text-2xl" />,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 3,
    name: "Ethan R.",
    rating: 5,
    icon: <FaCheckCircle className="text-[#01AB31] text-xl sm:text-2xl" />,
    text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
  },
  {
    id: 4,
    name: "Olivia P.",
    rating: 5,
    icon: <FaCheckCircle className="text-[#01AB31] text-xl sm:text-2xl" />,
    text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
  },
  {
    id: 5,
    name: "Samantha D.",
    rating: 5,
    icon: <FaCheckCircle className="text-[#01AB31] text-xl sm:text-2xl" />,
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
  },
  {
    id: 6,
    name: "Sophia L.",
    rating: 5,
    icon: <FaCheckCircle className="text-[#01AB31] text-xl sm:text-2xl" />,
    text: "Absolutely love their collection! Highly recommend for anyone who values both style and comfort.",
  },
];

function OurHappyCustomers() {
  const sliderRef = useRef(null);

const settings = {
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "214px",
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 3, centerPadding: "60px", centerMode: true },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, centerPadding: "40px", centerMode: true },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px" }, // ✅
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px" }, // ✅
    },
  ],
};


  return (
    <div className="relative mb-6 md:mb-9 lg:mb-12 xl:mb-16 2xl:mb-20">
      {/* Heading + Arrows */}
      <div className="flex justify-between px-4 xl:px-0 mb-6 md:mb-10 max-w-[1240px] mx-auto">
        <h2 className="leading-[30px] md:text-4xl capitalize text-[30px] font-integral font-[900]">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 text-2xl"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 text-2xl"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-3">
              <div className="border border-black/10 rounded-2xl p-6 sm:px-8 sm:py-7 min-h-[260px] bg-white flex flex-col justify-between">
                <Rating name="read-only" value={review.rating} readOnly />
                <div className="flex items-center mt-3">
                  <strong className="text-black sm:text-xl mr-1">{review.name}</strong>
                  {review.icon}
                </div>
                <p className="text-sm sm:text-base text-black/60 mt-2">{review.text}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Left light blur overlay */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[80px] sm:w-[150px] lg:w-[220px] 
                        backdrop-blur-[2px] bg-white/5 z-10" />

        {/* Right light blur overlay */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[80px] sm:w-[150px] lg:w-[220px] 
                        backdrop-blur-[2px] bg-white/5 z-10" />
      </div>
    </div>
  );
}

export default OurHappyCustomers;
