import React from 'react'

function DressStyle() {
  return (
    <>
<div className="mb-[50px] sm:mb-20">
  <div className="px-4 xl:px-0">
    <section className="max-w-[1240px] mx-auto bg-[#F0F0F0] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center">
      <h2 className=" text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14 capitalize" style={{ opacity: 1, transform: "none" }} >
        BROWSE BY dress STYLE
      </h2>
      <div className="flex flex-col sm:flex-row md:h-[289px] space-y-4 sm:space-y-0 sm:space-x-5 mb-4 sm:mb-5" style={{ opacity: 1, transform: "none" }} >
        <a className="w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] Bg-casual" href="/shop#casual" >
          Casual
        </a>
        <a className="w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover md:max-w-[684px] h-[190px] Bg-formal" href="/shop#formal">
          Formal
        </a>
      </div>
      <div className="flex flex-col sm:flex-row md:h-[289px] space-y-5 sm:space-y-0 sm:space-x-5" style={{ opacity: 1, transform: "none" }}>
        <a className="w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover md:max-w-[684px] h-[190px] Bg-party" href="/shop#party">
          Party
        </a>
        <a className="w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] Bg-gym" href="/shop#gym">
          Gym
        </a>
      </div>
    </section>
  </div>
</div>

    </>
  )
}

export default DressStyle

