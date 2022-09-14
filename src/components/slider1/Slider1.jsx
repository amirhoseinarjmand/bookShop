import datas from "./data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="rounded mySwiper"
      style={{ margin: "3rem auto", width: "74vw", maxWidth: "1200px" }}
    >
      {datas.map((data) => {
        const { id, imgSrc } = data;
        return (
          <SwiperSlide key={id}>
            <img
              className="rounded"
              src={imgSrc}
              alt=""
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
