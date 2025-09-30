import React,  { useState ,useEffect} from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

function NewArrivals() {
  const [newarrivals, setNewarrivals] = useState([]);
  useEffect(() => {
    fetch("https://ecommerce-shop-d11c2-default-rtdb.firebaseio.com/newarrivals.json")
      .then((response) => {
            response.json().then((result) => {
              setNewarrivals(result);
            })
          })
        });

  return (
    <section className="max-w-[1240px] mx-auto text-center my-10 md:my-20 px-4 md:px-0">
      <h2 className="text-[35px] md:text-5xl mb-8 md:mb-14 font-integral font-[900]">
        NEW ARRIVALS
      </h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 sm:space-x-5 px-4 xl:px-0 relative w-full mb-6 md:mb-9">
          {newarrivals.map((item) => (
            <div key={item.id} className="shrink-0 w-[198px] sm:w-[295px]">
              <Link
                to={`/product/${item.id}`}
                state={{ product: item }}   
                className="flex flex-col items-start"
              >
                <div className="bg-[#F0EEED] rounded-[20px] ...">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item.img}`}
                    alt={item.title}
                    className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
                  />
                </div>
                <strong className="text-black xl:text-xl">{item.title}</strong>
                <div className="flex items-end mb-1 xl:mb-2">
                  <Rating
                    style={{ fontSize: "19px" }}
                    value={item.rating}
                    precision={0.5}
                    readOnly
                  />
                  <span className="text-black text-xs xl:text-sm ml-[11px] xl:ml-[13px] pb-0.5 xl:pb-0">
                    {item.rating}/5
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-black text-xl xl:text-2xl">
                    ${item.price}
                  </span>
                  {item.oldPrice && (
                    <span className="font-bold text-black/40 line-through text-xl xl:text-2xl">
                      ${item.oldPrice}
                    </span>
                  )}
                  {item.discount && (
                    <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
                      {item.discount}
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
