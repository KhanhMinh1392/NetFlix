import PlayOutlineIcon from "@rsuite/icons/PlayOutline";
import InfoOutlineIcon from "@rsuite/icons/InfoOutline";
import React from "react";
import { Carousel, IconButton } from "rsuite";
import "./CarouselHorizontal.css";
import { NavLink } from "react-router-dom";

export default function CarouselHorizontal({ trending }) {
  return (
    <Carousel autoplay className="custom-slider" shape="bar">
      {trending.map((item, index) => (
        <div className="items" key={index}>
          <img
            className="items-images"
            src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
          />
          <div className="items-title">
            <h2 className="items-heading-title">
              {item.title ? item.title : item.original_name}
            </h2>
            <p className="items-heading-vote">{item.vote_average}</p>
            <h5 className="items-heading-overview">{item.overview}</h5>
            <div className="items-button">
              <IconButton size="lg" icon={<PlayOutlineIcon />} placement="left">
                Play
              </IconButton>
              <NavLink to={`/movie/${item.id}`}>
                <IconButton
                  size="lg"
                  icon={<InfoOutlineIcon />}
                  placement="left"
                  style={{ marginLeft: 20 }}
                  color="blue"
                  appearance="primary"
                >
                  Information
                </IconButton>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
