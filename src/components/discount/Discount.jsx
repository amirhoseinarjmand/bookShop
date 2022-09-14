import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "./swiper.css";

export default function Discount() {
  return (
    <section style={{ backgroundColor: "#000", padding: "8px 0" }}>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper container"
      >
        <SwiperSlide style={{ fontWeight: "normal" }}>
          1 کتاب بخرید ، 1 کتاب با 50% تخفیف دریافت کنید
        </SwiperSlide>
        <SwiperSlide style={{ fontWeight: "normal" }}>
          ارسال رایگان برای سفارش های بالای 100 هزار تومان
        </SwiperSlide>
        <SwiperSlide style={{ fontWeight: "normal" }}>
          70% تخفیف برای کتاب های صوتی
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
