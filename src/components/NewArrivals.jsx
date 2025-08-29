import React from "react";
import Rating from '@mui/material/Rating';
import Pic1 from "./images/pic1.jpg";
import Pic2 from "./images/pic2.jpg";
import Pic3 from "./images/pic3.jpg";
import Pic4 from "./images/pic4.jpg";

const products = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    img: Pic1,
    price: 120,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    link: "/shop/product/1/T-shirt-with-Tape-Details",
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    img: Pic2,
    price: 208,
    oldPrice: 260,
    discount: "-20%",
    rating: 3.5,
    link: "/shop/product/2/Skinny-Fit-Jeans",
  },
  {
    id: 3,
    title: "Chechered Shirt",
    img: Pic3,
    price: 180,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    link: "/shop/product/3/Chechered-Shirt",
  },
  {
    id: 4,
    title: "Casual Hoodie",
    img: Pic4,
    price: 150,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    link: "/shop/product/4/Casual-Hoodie",
  },
];

function NewArrivals() {
  return (
    <>
    <section className="max-w-[1240px] mx-auto text-center my-10 md:my-20 px-4 md:px-0">
      {/* Section Title */}
      <h2 className="text-[35px] md:text-5xl mb-8 md:mb-14 capitalize font-bold">  
        NEW ARRIVALS
      </h2>
      <div style={{opacity: 1, transform: "none"}}>
        <div className="relative w-full mb-6 md:mb-9  border-t-black/10 my-10 sm:my-16 " aria-roledescription="carousel" role="region">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 sm:space-x-5 px-4 xl:px-0">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="shrink-0 w-[198px] sm:w-[295px]"
                >
                  <a href={product.link} className="flex flex-col items-start">
                    {/* Product Image */}
                    <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full aspect-square mb-2.5 xl:mb-4 overflow-hidden">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
                      />
                    </div>

                    {/* Title */}
                    <strong className="text-black xl:text-xl">{product.title}</strong>

                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      <Rating value={product.rating} precision={0.5} readOnly />
                      <span className="text-black text-sm ml-2">
                        {product.rating}/5
                      </span>
                    </div>

                    {/* Price Section */}
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
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        <div className="w-full px-4 sm:px-0 text-center">
          <a className="w-full inline-block sm:w-[218px]  px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10" href="/shop#new-arrivals">
            View All
          </a>
        </div>
    </section>
    <div className="max-w-[1240px] mx-auto px-4 xl:px-0">
      <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
    </div>
    </>
  );
}

export default NewArrivals;
