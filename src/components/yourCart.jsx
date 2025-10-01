import React from "react";
import {
  FaChevronRight,
  FaTrash,
  FaMinus,
  FaPlus,
  FaArrowRight,
} from "react-icons/fa";
import { useCart } from "react-use-cart";

function YourCart() {
  const { items, updateItemQuantity, removeItem, cartTotal } = useCart();

  return (
    <main className="pb-20">
      <div className="max-w-[1240px] mx-auto px-4 xl:px-0">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-2 sm:mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm sm:gap-2.5">
            <li className="inline-flex items-center gap-1.5">
              <a className="hover:text-black" href="/home">
                Home
              </a>
            </li>
            <li aria-hidden="true">
              <FaChevronRight className="text-xs" />
            </li>
            <li className="inline-flex items-center gap-1.5">
              <span className="font-normal text-black">Cart</span>
            </li>
          </ol>
        </nav>

        {/* Heading */}
        <h2 className="font-[900] text-[32px] md:text-[40px] text-black uppercase mb-5 md:mb-6">
          Your Cart
        </h2>

        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
          {/* Cart Items */}
          <div className="w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
            {items.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              items.map((item) => (
                <div key={item.id}>
                  <div className="flex items-start space-x-4">
                  {/* Image */}
                  <div className="bg-[#F0EEED] rounded-lg min-w-[100px] max-w-[100px] sm:max-w-[124px] aspect-square overflow-hidden">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/${item.img}`}
                      alt={item.title}
                      className="rounded-md w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex w-full flex-col">
                    <div className="flex items-center justify-between">
                      <span className="text-black font-bold text-base xl:text-xl">
                        {item.title}
                      </span>
                      <button onClick={() => removeItem(item.id)}>
                        <FaTrash className="text-xl md:text-2xl text-red-600" />
                      </button>
                    </div>

                    {/* Size & Color */}
                    <div>
                      <span className="text-black text-xs md:text-sm mr-1">
                        Size:
                      </span>
                      <span className="text-black/60 text-xs md:text-sm">
                        {item.size}
                      </span>
                    </div>
                    <div>
                      <span className="text-black text-xs md:text-sm mr-1">
                        Color:
                      </span>
                      <span className="text-black/60 text-xs md:text-sm">
                        {item.colorName}
                      </span>
                    </div>

                    {/* Price + Quantity */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-black text-lg xl:text-xl">
                          ${item.price}
                        </span>
                        {item.oldPrice && (
                          <span className="text-black/40 line-through text-sm xl:text-base">
                            ${item.oldPrice}
                          </span>
                        )}
                        {item.discount && (
                          <span className="font-medium text-[10px] xl:text-xs py-1 px-2 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
                            {item.discount}
                          </span>
                        )}
                      </div>

                      {/* Quantity Control */}
                      <div className="bg-[#F0F0F0] rounded-full flex items-center justify-between px-4 py-2">
                        <button
                          onClick={() =>
                            item.quantity > 1 &&
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <FaMinus />
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                  <hr className="h-[1px] w-full border-t-black/1 my-1 sm:my-2" />
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:max-w-[505px] p-5 md:px-6 flex-col space-y-4 rounded-[20px] border border-black/10">
            <h6 className="text-xl md:text-2xl font-bold text-black">
              Order Summary
            </h6>

            <div className="flex items-center justify-between">
              <span className="md:text-xl text-black/60">Subtotal</span>
              <span className="md:text-xl font-bold">${cartTotal.toFixed(2)}</span>
            </div>

            {/* Discount */}
            <div className="flex items-center justify-between">
              <span className="md:text-xl text-black/60">
                Discount (
                {items.some((item) => item.oldPrice)
                  ? `${Math.round(
                      (items.reduce((acc, item) => {
                        if (item.oldPrice) {
                          return acc + (item.oldPrice - item.price) * item.quantity;
                        }
                        return acc;
                      }, 0) /
                        items.reduce((acc, item) => {
                          if (item.oldPrice) {
                            return acc + item.oldPrice * item.quantity;
                          }
                          return acc + item.price * item.quantity;
                        }, 0)) * 100
                    )}%`
                  : "-0%"}
                )
              </span>

            <span className="md:text-xl font-bold text-red-600">
              -${Math.abs(
                items.reduce((acc, item) => {
                  if (item.oldPrice) {
                    return acc + (item.oldPrice - item.price) * item.quantity;
                  }
                  return acc;
                }, 0)
              ).toFixed(2)}
            </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="md:text-xl text-black/60">Delivery Fee</span>
              <span className="md:text-xl font-bold">Free</span>
            </div>

            <hr className="border-t-black/10" />

            <div className="flex items-center justify-between">
              <span className="md:text-xl text-black/60">Total</span>
              <span className="md:text-xl font-bold">${cartTotal.toFixed(2)}</span>
            </div>

            {/* Promo code */}
            <div className="flex space-x-3">
              <div className="flex items-center w-full rounded-full overflow-hidden bg-[#F0F0F0] pl-4">
                <input
                  className="w-full py-3 pr-4 outline-none placeholder:text-sm bg-transparent placeholder:text-black/40"
                  placeholder="Add promo code"
                  type="text"
                  name="code"
                />
              </div>
              <button
                className="px-4 py-2 bg-black text-white rounded-full w-full max-w-[119px] h-[48px]"
                type="button"
              >
                Apply
              </button>
            </div>

            {/* Checkout Button */}
            <button className="px-4 py-4 bg-black text-white rounded-full w-full flex items-center justify-center text-sm md:text-base font-medium group">
              Go to Checkout
              <FaArrowRight className="text-xl ml-2 group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default YourCart;
