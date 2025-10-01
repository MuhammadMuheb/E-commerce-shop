import React, { useRef, useEffect, useState } from "react";
import { FaCheckCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Alex K.",
    rating: 5,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
id: 2,
name: "Sarah M.",
rating: 5,
text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
},
{
id: 3,
name: "Ethan R.",
rating: 5,
text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
},
{
id: 4,
name: "Olivia P.",
rating: 5,
text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
},
{
id: 5,
name: "Samantha D.",
rating: 5,
text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
},
{
id: 6,
name: "Sophia L.",
rating: 5,
text: "Absolutely love their collection! Highly recommend for anyone who values both style and comfort.",
},
];

function OurHappyCustomers() {
  const sliderRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

const settings = {
  infinite: reviews.length > 1,
  speed: 600,
   slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  arrows: false,
  responsive: [
    {
      breakpoint: 2560,
      settings: { slidesToShow: Math.min(5, reviews.length), centerMode: true, centerPadding: "0px" },
    },
    
    {
      breakpoint: 1280,
      settings: { slidesToShow: Math.min(3, reviews.length), centerMode: true, centerPadding: "0px" },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: Math.min(2, reviews.length), centerMode: true, centerPadding: "0px" },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px" }, // Mobile portrait
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px" }, // Small mobile
    },
  ],
};


  return (
    <section className="relative mb-10">
      <div className="flex justify-between items-center px-4 max-w-[1240px] mx-auto mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold capitalize">
          OUR HAPPY CUSTOMERS
        </h2>
        {mounted && reviews.length > 1 && (
          <div className="flex items-center space-x-1 ml-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 text-2xl"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 text-2xl"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>

      <div className="relative overflow-hidden">
        <Slider ref={sliderRef} {...settings} className="overflow-visible">
          {reviews.map((review) => (
            <div key={review.id} className="px-2 sm:px-3 w-full">
              <div className="bg-white border border-black/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[260px] w-full max-w-full">
                <Rating name="read-only" value={review.rating} readOnly className="text-yellow-400" />
                <div className="flex items-center mt-3">
                  <strong className="text-black sm:text-lg md:text-xl mr-2">{review.name}</strong>
                  <FaCheckCircle className="text-[#01AB31] text-lg sm:text-xl" />
                </div>
                <p className="text-sm sm:text-base mt-2 text-black/70">{review.text}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Overlays only for desktop */}
        {reviews.length > 1 && (
          <>
            <div className="hidden lg:block pointer-events-none absolute left-0 top-0 h-full w-[150px] lg:w-[220px] backdrop-blur-[2px] bg-white/5 z-10" />
            <div className="hidden lg:block pointer-events-none absolute right-0 top-0 h-full w-[150px] lg:w-[220px] backdrop-blur-[2px] bg-white/5 z-10" />
          </>
        )}
      </div>
    </section>
  );
}

export default OurHappyCustomers;
