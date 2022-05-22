import React from "react";
import { NavLink } from "react-router-dom";
import { Panel } from "rsuite";
import { A11y, Lazy, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import urlConfig from "../../../config/urlConfig";
import "./CarouselComing.css";
export default function CarouselComing({ upcoming }) {
  return (
    <div className="movie-list">
      <Swiper
        modules={[Navigation, A11y, Lazy]}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
      >
        {upcoming.map((item, index) => (
          <SwiperSlide key={index}>
            <NavLink to={`/movie/${item.id}`}>
              <Panel
                shaded
                bordered
                bodyFill
                style={{ display: "inline-block", width: 240 }}
              >
                <img src={urlConfig.url_img + item.poster_path} height="100%" />
              </Panel>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
