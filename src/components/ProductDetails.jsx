import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaMinus, FaPlus, FaCheck } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import productData from "./data/ProductData.json";

function ProductDetails() {
  const { id } = useParams();
  const product = productData.products.find((p) => p.id === parseInt(id));

  
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState("#4F4631");
  const [activeSize, setActiveSize] = useState("Large");
  const [mainImg, setMainImg] = useState(product?.img);

  if (!product) return <h2 className="text-center mt-20">Product Not Found</h2>;

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const thumbnails = [product.img, product.img, product.img];

  return (
    <>

<nav aria-label="breadcrumb" className="max-w-[1240px] m-auto mb-5 sm:mb-9">
  <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
    <li className="inline-flex items-center gap-1.5">
      <a className="transition-colors hover:text-foreground" href="/">
        Home
      </a>
    </li>
    <li role="presentation" aria-hidden="true" className="text-gray-500">
      <FaChevronRight className="text-xs" />
    </li>
    <li className="inline-flex items-center gap-1.5">
      <a className="transition-colors hover:text-foreground" href="/shoppage">
        Shop
      </a>
    </li>
    <li role="presentation" aria-hidden="true" className="text-gray-500">
      <FaChevronRight className="text-xs" />
    </li>
    <li className="inline-flex items-center gap-1.5">
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    className="font-normal text-foreground"
  >
    {product.title}
  </span>
</li>

  </ol>
</nav>
    <section className="mb-11 max-w-[1240px] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Left Side Images */}
        <div>
          <div className="flex flex-col-reverse lg:flex-row lg:space-x-3.5">
            
            {/* Small Thumbnails */}
            <div className="flex lg:flex-col space-x-3 lg:space-x-0 lg:space-y-3.5 w-full lg:w-fit items-center justify-center lg:justify-start">
              {thumbnails.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImg(img)}
                  className="bg-[#F0EEED] rounded-[13px] xl:rounded-[20px] w-full max-w-[111px] xl:max-w-[152px] max-h-[106px] xl:max-h-[167px] xl:min-h-[167px] aspect-square overflow-hidden"
                >
                  <img
                    src={img}
                    alt={product.title}
                    className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex items-center justify-center bg-[#F0EEED] rounded-[13px] sm:rounded-[20px] w-full sm:w-96 md:w-full mx-auto h-full max-h-[530px] min-h-[330px] lg:min-h-[380px] xl:min-h-[530px] overflow-hidden mb-3 lg:mb-0">
              <img
                src={`${process.env.PUBLIC_URL}/images/${mainImg}`}
                alt={product.title}
                className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Right Side Details */}
        <div>
          {/* Title */}
          <h1 className=" text-2xl md:text-[50px] md:leading-[50px] mb-3 md:mb-3.5 font-bold">
            {product.title}
          </h1>

          {/* Price */}
          <div className="flex items-center space-x-2.5 mb-5">
            <span className="font-bold text-black text-2xl sm:text-[32px]">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="font-bold text-black/40 line-through text-xl xl:text-2xl">
                ${product.oldPrice}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-black/60 mb-5">
            {product.description}
          </p>

          <hr className="h-[1px] border-t-black/10 mb-5" />

          {/* Colors */}
          <div className="flex items-center flex-wrap space-x-3 sm:space-x-4">
            {product.colors?.map((color) => (
              <button
                key={color}
                onClick={() => setActiveColor(color)}
                className="rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                {activeColor === color && (
                  <FaCheck className="text-white text-sm" />
                )}
              </button>
            ))}
            </div>

          <hr className="h-[1px] border-t-black/10 my-5" />

          {/* Sizes */}
          <div className="flex flex-col mb-5">
            <span className="text-sm sm:text-base text-black/60 mb-4">
              Choose Size
            </span>
            <div className="flex flex-wrap lg:space-x-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base rounded-full m-1 ${
                    activeSize === size
                      ? "bg-black text-white"
                      : "bg-[#F0F0F0] text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <hr className="hidden md:block h-[1px] border-t-black/10 my-5" />

          {/* Quantity + Add to Cart */}
          <div className="fixed md:relative w-full bg-white border-t md:border-none border-black/5 bottom-0 left-0 p-4 md:p-0 z-10 flex items-center justify-between sm:justify-start md:justify-center">
            <div className="bg-[#F0F0F0] w-full min-w-[110px] max-w-[110px] sm:max-w-[170px] py-3 md:py-3.5 px-4 sm:px-5 rounded-full flex items-center justify-between">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-xl"
              >
                <FaMinus />
              </button>
              <span className="font-medium text-sm sm:text-base">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-xl"
              >
                <FaPlus />
              </button>
            </div>
            <button className="bg-black w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProductDetails;
