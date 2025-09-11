import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import productData from "./data/ProductData.json";

function TopSelling() {
  const topselling = productData.topselling;

  return (
    <section className="max-w-[1240px] mx-auto text-center my-10 md:my-20 px-4 md:px-0">
      <h2 className="text-[35px] md:text-5xl mb-8 md:mb-14 font-integral  font-[900] vertical-alignment-middle">
        TOP SELLING
      </h2>
      <div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 sm:space-x-5 px-4 xl:px-0">
            {topselling.map((product) => (
              <div key={product.id} className="shrink-0 w-[198px] sm:w-[295px]">
                <a href={product.link} className="flex flex-col items-start">
                  <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full aspect-square mb-2.5 xl:mb-4 overflow-hidden">
                    <img
                       src={`${process.env.PUBLIC_URL}/images/${product.img}`}                      alt={product.title}
                      className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  <strong className="text-black xl:text-xl">{product.title}</strong>
                  <div className="flex items-center mb-2">
                    <Rating value={product.rating} precision={0.5} readOnly />
                    <span className="text-black text-sm ml-2">{product.rating}/5</span>
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
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSelling;
