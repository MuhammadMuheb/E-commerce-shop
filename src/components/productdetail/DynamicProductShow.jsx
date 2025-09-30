import React, { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";
import Rating from "@mui/material/Rating";
import { FaMinus, FaPlus, FaCheck, FaChevronRight } from "react-icons/fa";
import { useCart } from "react-use-cart";

function ProductDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const { addItem } = useCart();
  const location = useLocation();
  const product = location.state?.product;
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState(product?.colors?.[0] || "");
  const [activeSize, setActiveSize] = useState("Large");
  const [mainImg, setMainImg] = useState(product?.img || "");
  const thumbnails = [product.img];
  const colorNames = {
    "#4F4631": "Brown",
    "#314F4A": "Green",
    "#31344F": "Navy Blue",
  };

  if (!product) {
    return <h2 className="text-center text-xl mt-10">Product Not Found</h2>;
  }

  return (
    <div className="max-w-[1240px] mx-auto px-4 xl:px-0">
      <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
      <nav aria-label="breadcrumb" className="mb-5 sm:mb-9">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground sm:gap-2.5">
          <li className="inline-flex items-center gap-1.5"><a href="/*">Home</a></li>
          <FaChevronRight className="text-xs" />
          <li><a href="/shoppage">Shop</a></li>
          <FaChevronRight className="text-xs" />
          <li><span>{product.title}</span></li>
        </ol>
      </nav>

      <section className="mb-11 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left Side */}
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-3.5">
          <div className="flex lg:flex-col space-x-3 lg:space-x-0 lg:space-y-3.5 w-full lg:w-fit items-center lg:justify-start justify-center">
            {thumbnails.map((img, idx) => (
              <button key={idx} onClick={() => setMainImg(img)} className="bg-[#F0EEED] rounded-[13px] xl:rounded-[20px] w-full max-w-[111px] xl:max-w-[152px] max-h-[106px] xl:max-h-[167px] xl:min-h-[167px] aspect-square overflow-hidden">
                <img src={`${process.env.PUBLIC_URL}/images/${img}`} alt={product.title} className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500" />
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center bg-[#F0EEED] rounded-[13px] sm:rounded-[20px] w-full sm:w-96 md:w-full mx-auto h-full max-h-[530px] min-h-[330px] lg:min-h-[380px] xl:min-h-[530px] overflow-hidden mb-3 lg:mb-0">
            <img src={`${process.env.PUBLIC_URL}/images/${mainImg}`} alt={product.title} className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500" />
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h1 className="text-2xl md:text-[40px] mb-3 md:mb-3.5 capitalize">{product.title}</h1>

          <div className="flex items-center mb-3 sm:mb-3.5">
            <Rating value={product.rating} precision={0.5} readOnly />
            <span className="text-black text-xs sm:text-sm ml-[11px] sm:ml-[13px]">{product.rating}/5</span>
          </div>

          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-5">
            <span className="font-bold text-black text-2xl sm:text-[32px]">${product.price}</span>
            {product.oldPrice && <span className="font-bold text-black/40 line-through text-2xl sm:text-[32px]">${product.oldPrice}</span>}
          </div>

          <p className="text-sm sm:text-base text-black/60 mb-5">{product.description}</p>
          <hr className="h-[1px] border-t-black/10 mb-5" />

          <div className="flex flex-col mb-5">
            <span>Select Colors</span>
            <div className="flex items-center flex-wrap space-x-3 sm:space-x-4">
              {product.colors?.map((color) => (
                <button key={color} onClick={() => setActiveColor(color)} className="rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center" style={{ backgroundColor: color }}>
                  {activeColor === color && <FaCheck className="text-white" />}
                </button>
              ))}
            </div>
          </div>

          <hr className="h-[1px] border-t-black/10 my-5" />

          <div className="flex flex-col mb-5">
            <span>Choose Size:</span>
            <div className="flex items-center flex-wrap lg:space-x-3">
              {["Small","Medium","Large","X-Large"].map(size => (
                <button key={size} onClick={() => setActiveSize(size)} className={`px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base rounded-full m-1 ${activeSize === size ? "bg-black text-white" : "bg-[#F0F0F0] text-black"}`}>{size}</button>
              ))}
            </div>
          </div>

          <hr className="hidden md:block h-[1px] border-t-black/10 my-5" />

          <div className="fixed md:relative w-full bg-white border-t md:border-none border-black/5 bottom-0 left-0 p-4 md:p-0 z-10 flex items-center justify-between sm:justify-start md:justify-center">
            <div className="bg-[#F0F0F0] w-full min-w-[110px] max-w-[110px] sm:max-w-[170px] py-3 px-4 rounded-full flex items-center justify-between">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><FaMinus /></button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} ><FaPlus /></button>
            </div>

            <button
  className="bg-black w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all"
  onClick={() =>
    addItem(
      {
        ...product,
        id: `${product.id}-${activeColor}-${activeSize}`,
        color: activeColor,
        colorName: colorNames[activeColor] || activeColor,
        size: activeSize
      },
      quantity 
    )
  }
>
  Add to Cart
</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;