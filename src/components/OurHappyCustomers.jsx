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
    rating: 4,
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
    rating: 4,
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
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false, // arrows custom banaye hain
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="relative mb-6 md:mb-9 mx-auto">
      {/* Heading + Arrows */}
      <div className="max-w-[1240px] m-auto flex justify-between px-4 xl:px-12 mb-6 md:mb-10">
        <h2 className="text-[32px] leading-[36px] md:text-5xl capitalize font-bold">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="h-9 w-9 flex items-center justify-center rounded-md text-2xl hover:bg-gray-100"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="h-9 w-9 flex items-center justify-center rounded-md text-2xl hover:bg-gray-100"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Slider with gradient edges */}
      <div className="relative w-full mx-auto px-2">
        {/* Left gradient */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right gradient */}
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-2">
              <div className="bg-white border border-black/10 rounded-[20px] p-6 sm:px-8 sm:py-7 h-full flex flex-col shadow-md">
                {/* Rating */}
                <div className="mb-3 sm:mb-4">
                  <Rating name="read-only" value={review.rating} readOnly />
                </div>
                {/* Name + Icon */}
                <div className="flex items-center mb-2 sm:mb-3">
                  <strong className="text-black sm:text-xl mr-1">
                    {review.name}
                  </strong>
                  {review.icon}
                </div>
                {/* Review Text */}
                <p className="text-sm sm:text-base text-black/60">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default OurHappyCustomers;
