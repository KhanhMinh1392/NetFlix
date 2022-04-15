import React from "react";
import { Panel } from "rsuite";
import { A11y, Lazy, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import urlConfig from "../../../config/urlConfig";
import './CarouselTop.css'
export default function CarouselTop({ top }) {
  return (
    <div className="movie-list">
      <Swiper
        modules={[Navigation, A11y, Lazy]}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
      >
        {top.map((item, index) => ( 
          <SwiperSlide key={index}>
            <Panel
              shaded
              bordered
              bodyFill
              style={{ display: "inline-block", width: 240 }}
            >
              <img src={urlConfig.url_img + item.poster_path} height="300" />
            </Panel>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
