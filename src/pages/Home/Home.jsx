import React from "react";
import { Divider } from "rsuite";
import CarouselComing from "../../component/Carousel/CarouselComing/CarouselComing";
import CarouselHorizontal from "../../component/Carousel/CarouselHorizontal/CarouselHorizontal";
import CarouselList from "../../component/Carousel/CarouselList/CarouselList";
import CarouselTop from "../../component/Carousel/CarouselTop/CarouselTop";
import "./Home.css";
export default function Home({ trending, popular, top, upcoming }) {
  return (
    <div className="container">
      <div className="banner">
        <CarouselHorizontal trending={trending} />
      </div>
      <div className="list">
        <Divider className="list-text-heading" aria-orientation="vertical">
          Comings Movies
        </Divider>
        <CarouselComing upcoming={upcoming} />
      </div>
      <div className="list">
        <Divider className="list-text-heading" aria-orientation="vertical">
          Top Rate Movies
        </Divider>
        <CarouselTop top={top} />
      </div>
      <div className="list">
        <Divider className="list-text-heading" aria-orientation="vertical">
          Popular Movies
        </Divider>
        <CarouselList popular={popular} />
      </div>
    </div>
  );
}
