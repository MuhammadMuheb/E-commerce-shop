import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import productData from "./data/ProductData.json";

function NewArrivals() {
  const products = productData.products;
  return (
    <section className="max-w-[1240px] mx-auto text-center my-10 md:my-20 px-4 md:px-0">
      <h2 className="text-[35px] md:text-5xl mb-8 md:mb-14 capitalize font-bold">  
        NEW ARRIVALS
      </h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 sm:space-x-5 px-4 xl:px-0 relative w-full mb-6 md:mb-9">
          {products.map((product) => (
            <div key={product.id} className="shrink-0 w-[198px] sm:w-[295px]">
              <Link to={`/product/${product.id}`} className="flex flex-col items-start">
                <div className="bg-[#F0EEED] rounded-[20px] w-full aspect-square mb-4 overflow-hidden">
                  <img 
                       src={`${process.env.PUBLIC_URL}/images/${product.img}`}
                    alt={product.title} 
                    className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500" 
                  />
                </div>
                <strong className="text-black xl:text-xl">{product.title}</strong>
                <div className="flex items-end mb-1 xl:mb-2">
                  <Rating style={{ fontSize:'19px'}} value={product.rating} precision={0.5} readOnly />
                  <span className="text-black text-xs xl:text-sm ml-[11px] xl:ml-[13px] pb-0.5 xl:pb-0">
                    {product.rating}/5
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-black text-xl xl:text-2xl">${product.price}</span>
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
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-0 text-center">
        <a 
          className="w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10" 
          href="/shoppage#new-arrivals"
        >
          View All
        </a>
      </div>

      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
      </div>
    </section>
  );
}

export default NewArrivals;
