import React from "react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./featured.css";
SwiperCore.use([Navigation, Pagination]);
const Featured = () => {
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const swiperRef = React.useRef(null);
  return (
    <div className="relative">
      <div className="mx-auto text-center ">
        <p className="text-[#583101] py-12 text-3xl">Top Featured products</p>
      </div>
      <Swiper
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <Slides />
        </SwiperSlide>
        <SwiperSlide>
          <Slides />
        </SwiperSlide>
        <SwiperSlide>
          <Slides />
        </SwiperSlide>
      </Swiper>
      <button className="swiper-button-prev " onClick={goPrev}>
        <img
          src="/assets/left.png"
          className="bi bi-arrow-right absolute left-0 top-[50%] z-50"
          alt=""
        />
      </button>
      <button className="swiper-button-next" onClick={goNext()}>
        <img
          src="/assets/right.png"
          className="bi bi-arrow-right absolute right-0 top-[50%] z-50"
          alt=""
        />
      </button>
    </div>
  );
};
const Slides = () => {
  return (
    <div className="grid md:grid-cols-2 xs:grid-cols-1 md:max-w-[1240px] mx-auto gap-5">
      <div className="w-full py-10">
        <img src="./assets/slide1.png" alt="" />
      </div>
      <div className="w-ful py-12">
        <p className="text-[#583101] p-2 md:text-3xl xs:text-xl">
          Tufted Grey Sofa
        </p>
        <p className="text-[#583101] mx-auto p-2 md:text-2xl xs:text-xl">
          Details Excluding comfort and elegance, this wing back chair offers
          the ultimate sane haven.Its abundantly soft cushions are adorned with
          elegance fabrics on beautiful and inviting as they are conditioned to
          withstand daily wear and tear
        </p>
        <div className="flex justify-between py-10 m-2">
          <p className="text-2xl">250$</p>
          <button className="bg-[#583101] text-white p-3 rounded-lg">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Featured;
