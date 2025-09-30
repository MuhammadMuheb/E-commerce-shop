import React ,  { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
// import { useNavigate } from "react-router-dom";


function TopSelling() {
  const [topselling, setTopselling] = useState([]);
  useEffect(() => {
    fetch("https://ecommerce-shop-d11c2-default-rtdb.firebaseio.com/topselling.json")
      .then((response) => {
            response.json().then((result) => {
              setTopselling(result);
            })
          })
        });
        // const navigate = useNavigate();



  return (
    <section className="max-w-[1240px] mx-auto text-center my-10 md:my-20 px-4 md:px-0">
      <h2 className="text-[35px] md:text-5xl mb-8 md:mb-14 font-integral font-[900]">
        TOP SELLING
      </h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 sm:space-x-5 px-4 xl:px-0">
          {topselling.map((item) => (
            <div key={item.id} className="shrink-0 w-[198px] sm:w-[295px]">
              <Link
                to={`/product/${item.id}`}
                state={{ product: item }}   
                className="flex flex-col items-start"
              >
                <div className="bg-[#F0EEED] rounded-[13px] ...">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item.img}`}
                    alt={item.title}
                    className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
                  />
                </div>
                <strong className="text-black xl:text-xl">{item.title}</strong>
                <div className="flex items-center mb-2">
                  <Rating value={item.rating} precision={0.5} readOnly />
                  <span className="text-black text-sm ml-2">{item.rating}/5</span>
                </div>
                <div className="flex items-center space-x-[5px] xl:space-x-2.5">
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
    </section>
  );
}

export default TopSelling;
