import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./Gallery.scss";
import "swiper/css";
import "swiper/css/navigation";

import WIIGallery from "@data/WhatItIsGallery.json";

export default function Gallery() {
  return (
    <div className="sw-gallery">
      <button className="sw-gallery__btn sw-gallery__prev">
        <FaAngleLeft />
      </button>

      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: ".sw-gallery__next",
          prevEl: ".sw-gallery__prev",
        }}
        modules={[Navigation]}
        className="sw-gallery__container"
      >
        {WIIGallery.map((item, index) => {
          return (
            <SwiperSlide key={index} className="sw-gallery__container-slide">
              <p className="sw-gallery__container-slide-header">
                {item.header}
              </p>
              <p className="sw-gallery__container-slide-desc">
                {item.description}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="sw-gallery__btn sw-gallery__next">
        <FaAngleRight />
      </button>
    </div>
  );
}
