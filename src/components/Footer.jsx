import React from 'react'
import { FaRegEnvelope ,FaTwitter , FaFacebookF , FaInstagram , FaGithub, FaLinkedinIn } from "react-icons/fa";
import Visa from './images/Visa.jpg';
import Mastercard from './images/mastercard.jpg';
import Paypal from './images/paypal.jpg';
import ApplePay from './images/applePay.jpg';
import GooglePay from './images/googlePay.jpg';

function Footer() {
  return (
  <>
    <footer className="mt-10">
      <div className="relative">
        <div className="absolute bottom-0 w-full h-1/2 bg-[#F0F0F0]" />
        <div className="px-4">
          <div className="relative grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16 max-w-[1240px] mx-auto bg-black rounded-[20px]">
            <p className=" font-bold text-[32px] md:text-[40px] text-white mb-9 md:mb-0">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </p>
            <div className="flex items-center">
              <div className="flex flex-col w-full max-w-[349px] mx-auto">
                <div className="input-group focus-within:shadow-lg pl-4 transition-all relative items-center w-full rounded-full overflow-hidden flex bg-white mb-[14px]">
                  <div className="input-group-text mr-2">
                    <FaRegEnvelope className='w-5 h-5'/>
                  </div>
                  <input className="input-control w-full py-3 pr-4 outline-none placeholder:font-normal bg-transparent placeholder:text-black/40 placeholder:text-sm sm:placeholder:text-base" autoComplete="off" autoCorrect="off" spellCheck="false" type="email" placeholder="Enter your email address" name="email" />
                </div>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-secondary-foreground shadow-sm hover:bg-secondary/80 text-sm sm:text-base font-medium bg-white h-12 rounded-full px-4 py-3" aria-label="Subscribe to Newsletter" type="button" >
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 md:pt-[50px] bg-[#F0F0F0] px-4 pb-4">
        <div className="max-w-[1240px] mx-auto">
          <nav className="lg:grid lg:grid-cols-12 mb-8">
            <div className="flex flex-col lg:col-span-3 lg:max-w-[248px]">
              <h1 className="__className_931021 text-[28px] lg:text-[32px] mb-6">
                SHOP.CO
              </h1>
              <p className="text-black/60 text-sm mb-9">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex items-center">
                <a className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-black/20 flex items-center justify-center p-1.5" href="https://twitter.com" >
                  <FaTwitter />
                </a>
                <a className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-black/20 flex items-center justify-center p-1.5" href="https://facebook.com">
                  <FaFacebookF />
                </a>
                <a className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-black/20 flex items-center justify-center p-1.5" href="https://instagram.com">
                  <FaInstagram />
                </a>
                <a className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-black/20 flex items-center justify-center p-1.5" href="https://linkedin.com">
                  <FaLinkedinIn />
                </a>
                <a className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-black/20 flex items-center justify-center p-1.5" href="https://github.com/MuhammadMuheb">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="hidden lg:grid col-span-9 lg:grid-cols-4 lg:pl-10">
              <section className="flex flex-col mt-5">
                <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
                  company
                </h3>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#" >
                  about
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#" >
                  features
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#" >
                  works
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#" >
                  career
                </a>
              </section>
              <section className="flex flex-col mt-5">
                <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
                  help
                </h3>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#" >
                  customer support
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#" >
                  delivery details
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  terms &amp; conditions
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  privacy policy
                </a>
              </section>
              <section className="flex flex-col mt-5">
                <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
                  faq
                </h3>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  account
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  manage deliveries
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  orders
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  payments
                </a>
              </section>
              <section className="flex flex-col mt-5">
                <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
                  resources
                </h3>
                <a className="text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  Free eBooks
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  development tutorial
                </a>
                <a className="text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  How to - Blog
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  youtube playlist
                </a>
              </section>
            </div>
            <div className="grid lg:hidden grid-cols-2 sm:grid-cols-4">
              <section className="flex flex-col mt-5">
                <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
                  company
                </h3>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  about
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#" >
                  features
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  works
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  career
                </a>
              </section>
              <section className="flex flex-col mt-5">
                <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
                  help
                </h3>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  customer support
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  delivery details
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#" >
                  terms &amp; conditions
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  privacy policy
                </a>
              </section>
              <section className="flex flex-col mt-5">
                <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
                  faq
                </h3>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  account
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  manage deliveries
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#">
                  orders
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#" >
                  payments
                </a>
              </section>
              <section className="flex flex-col mt-5">
                <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
                  resources
                </h3>
                <a className="text-black/60 text-sm md:text-base mb-4 w-fit" href="#" >
                  Free eBooks
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#" >
                  development tutorial
                </a>
                <a className="text-black/60 text-sm md:text-base mb-4 w-fit" href="#" >
                  How to - Blog
                </a>
                <a className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit" href="#" >
                  youtube playlist
                </a>
              </section>
            </div>
          </nav>
          <hr className="h-[1px] border-t-black/10 mb-6" />
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-2">
            <p className="text-sm text-center sm:text-left text-black/60 mb-4 sm:mb-0 sm:mr-1">
              Shop.co © Made by{/* */}{" "}
              <a className="text-black font-medium" href="https://github.com/MuhammadMuheb">
                MuhammadMuheb
              </a>
              , {/* */}Designed by{/* */}{" "}
              <a className="text-black font-medium" href="https://github.com/MuhammadMuheb/E-commerce-shop">
                Muheb Riaz
              </a>
            </p>
            <div className="flex items-center">
              <span className="mr-3 w-[46px] h-[30px] rounded-[5px] border-[#D6DCE5] bg-white flex items-center justify-center">
                <img alt="user" fetchpriority="high" width={33} height={100} decoding="async" data-nimg={1} className="max-h-[15px]" style={{ color: "transparent" }} src={Visa} />
              </span>
              <span className="mr-3 w-[46px] h-[30px] rounded-[5px] border-[#D6DCE5] bg-white flex items-center justify-center">
                <img alt="user" fetchpriority="high" width={33} height={100} decoding="async" data-nimg={1} className="max-h-[15px]" style={{ color: "transparent" }} src={Mastercard} />
              </span>
              <span className="mr-3 w-[46px] h-[30px] rounded-[5px] border-[#D6DCE5] bg-white flex items-center justify-center">
                <img alt="user" fetchpriority="high" width={33} height={100} decoding="async" data-nimg={1} className="max-h-[15px]" style={{ color: "transparent" }} src={Paypal} />
              </span>
              <span className="mr-3 w-[46px] h-[30px] rounded-[5px] border-[#D6DCE5] bg-white flex items-center justify-center">
                <img  alt="user"  fetchpriority="high"  width={33}  height={100}  decoding="async"  data-nimg={1}  className="max-h-[15px]"  style={{ color: "transparent" }}  src={ApplePay} />
              </span>
              <span className="w-[46px] h-[30px] rounded-[5px] border-[#D6DCE5] bg-white flex items-center justify-center">
                <img alt="user" fetchpriority="high" width={33} height={100} decoding="async" data-nimg={1} className="max-h-[15px]" style={{ color: "transparent" }} src={GooglePay} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
  )
}

export default Footer;