import React from "react";
import Slider from "react-slick";
import { FaCheckCircle } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Olipiantha P.",
    rating: 5,
    text: "Absolutely love it! Minimal, clean and very user friendly design.",
  },
  {
    id: 2,
    name: "John D.",
    rating: 4,
    text: "This website makes shopping so much easier, love the interface!",
  },
  {
    id: 3,
    name: "Sofia M.",
    rating: 5,
    text: "Superb experience, smooth checkout and great collection.",
  },
  {
    id: 4,
    name: "Ali R.",
    rating: 5,
    text: "Highly recommend, the simplicity and speed is unmatched!",
  },
];

function CustomerReviews() {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "200px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, centerPadding: "40px", centerMode: true },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "30px", centerMode: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px" },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative max-w-[1240px] mx-auto px-4 md:px-8 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        OUR HAPPY CUSTOMERS
      </h2>

      <div className="relative">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-2 sm:px-3 w-full min-w-0">
              <div className="bg-white border border-black/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[260px] text-left">
                {/* Stars */}
                <Rating
                  name="read-only"
                  value={review.rating}
                  readOnly
                  className="text-yellow-400"
                  size="medium"
                />

                {/* Name + Verified */}
                <div className="flex items-center mt-3">
                  <strong className="text-black sm:text-lg md:text-xl mr-2">
                    {review.name}
                  </strong>
                  <FaCheckCircle className="text-[#01AB31] text-lg sm:text-xl" />
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base mt-2 text-black/70">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Blur Overlays → ✅ only desktop */}
        <div className="hidden lg:block pointer-events-none absolute left-0 top-0 h-full w-[150px] lg:w-[220px] backdrop-blur-[2px] bg-white/5 z-10" />
        <div className="hidden lg:block pointer-events-none absolute right-0 top-0 h-full w-[150px] lg:w-[220px] backdrop-blur-[2px] bg-white/5 z-10" />
      </div>
    </section>
  );
}

export default CustomerReviews;
