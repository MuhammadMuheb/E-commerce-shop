import React from "react";
import Bigstar from "./images/big-star.jpg";
import Smallstar from "./images/small-star.png";
import Versace from "./images/versace-logo.png";
import Zara from "./images/zara-logo.png";
import Gucci from "./images/gucci-logo.png";
import Prada from "./images/prada-logo.png";
import CalvinKlein from "./images/calvin-klein-logo.png";
function Home() {
  return (
    <>
        <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
            <div className=" max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                {/* Left Section (Text + Button + Stats) */}
                <section className="max-w-[1240px] px-4">
                <h2 className=" text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8 home-h2 font-extrabold">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </h2>
                <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px] home-p">
                    Browse through our diverse range of meticulously crafted garments,
                    designed to bring out your individuality and cater to your sense of style.
                </p>
                <div>
                    <a href="/shop" className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse">
                    Shop Now
                    </a>
                </div>
                <div className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]">
                    <div className="flex flex-col">
                    <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">200+</span>
                    <span className="text-xs xl:text-base text-black/60 text-nowrap">International Brands</span>
                    </div>
                    <div className="shrink-0 w-[1px] ml-6 md:ml-0 h-12 md:h-full bg-black/10"></div>

                    <div className="flex flex-col ml-6 md:ml-0">
                    <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">2,000+</span>
                    <span className="text-xs xl:text-base text-black/60 text-nowrap">High-Quality Products</span>
                    </div>
                    <div className="shrink-0 h-full w-[1px] hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10"></div>
    
                    <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
                    <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">3,000+</span>
                    <span className="text-xs xl:text-base text-black/60 text-nowrap">Happy Customers</span>
                    </div>
                </div>
                </section>
                <section className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat home-bg-img">
                <img src={Bigstar} alt="big star" className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 xl:max-w-[104px] xl:max-h-[104px] animate-[spin_4s_infinite]" />
                <img src={Smallstar} alt="small star" className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-[spin_3s_infinite]" />
                </section>
            </div>
        </header>
        <div className="bg-black">
            <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
                <img src={Versace} alt="versace" className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11" />
                <img src={Zara} alt="zara" className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11" />
                <img src={Gucci} alt="gucci" className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11" />
                <img src={Prada} alt="prada" className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11" />
                <img src={CalvinKlein} alt="calvin klein" className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11" />
            </div>
        </div>
    </>
  );
}

export default Home;
