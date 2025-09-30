import React from "react";

function ProductSpecifications() {
  return (
    <div className="mb-12 sm:mb-16">
      <section>
        <h3 className="text-[25px] sm:text-2xl font-bold text-black mb-5 sm:mb-6">
          Product specifications
        </h3>
        <div className="grid grid-cols-3">
          <div>
            <p className="text-sm py-3 w-full leading-7 lg:py-4 pr-2 text-neutral-500">Material composition</p>
          </div>
          <div className="col-span-2 py-3 border-b">
            <p className="text-sm w-full leading-7 text-neutral-800 font-[700]">100% Cotton</p>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div>
            <p className="text-sm py-3 w-full leading-7 lg:py-4 pr-2 text-neutral-500">Care instructions</p>
          </div>
          <div className="col-span-2 py-3 border-b">
            <p className="text-sm w-full leading-7 text-neutral-800 font-[700]">
              Machine wash warm, tumble dry
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div>
            <p className="text-sm py-3 w-full leading-7 lg:py-4 pr-2 text-neutral-500">Fit type</p>
          </div>
          <div className="col-span-2 py-3 border-b">
            <p className="text-sm w-full leading-7 text-neutral-800 font-[700]">Classic Fit</p>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div>
            <p className="text-sm py-3 w-full leading-7 lg:py-4 pr-2 text-neutral-500">Pattern</p>
          </div>
          <div className="col-span-2 py-3 border-b">
            <p className="text-sm w-full leading-7 text-neutral-800 font-[700]">Solid</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductSpecifications;
