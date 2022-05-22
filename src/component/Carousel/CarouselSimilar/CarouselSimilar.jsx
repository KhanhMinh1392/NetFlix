import React from "react";
import { NavLink } from "react-router-dom";
import { Panel } from "rsuite";
import { A11y, EffectFade, Lazy, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import urlConfig from "../../../config/urlConfig";
import "./CarouselSimilar.css";
export default function CarouselSimilar({similar}) {
  return (
    <div>
      <Swiper
        modules={[Navigation, A11y, Lazy, EffectFade]}
        slidesPerView={5}
        navigation
        effect="coverflow"
        lazy={false}
        pagination={{ clickable: true }}
      >
        {similar.map((item, index) => (
          <SwiperSlide key={index}>
            <NavLink to={`/movie/${item.id}`}>
              <Panel
                shaded
                bordered
                bodyFill
                style={{ display: "inline-block", width: 240 }}
              >
                <img src={urlConfig.url_img + item.poster_path} height="400" />
              </Panel>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
