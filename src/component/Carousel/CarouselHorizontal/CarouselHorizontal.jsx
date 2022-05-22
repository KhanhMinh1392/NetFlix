import InfoOutlineIcon from "@rsuite/icons/InfoOutline";
import PlayOutlineIcon from "@rsuite/icons/PlayOutline";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Carousel, IconButton } from "rsuite";
import ModalTrailer from "../../ModalTrailer";
import "./CarouselHorizontal.css";

export default function CarouselHorizontal({ trending }) {
  const [open, setOpen] = useState(false);
  return (
    <Carousel autoplay className="custom-slider" shape="bar">
      {trending.map((item, index) => (
        <div className="items" key={index}>
          <img
            className="items-images"
            src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
          />
          <div className="items-content">
            <div className="items-title">
              <h2 className="items-heading-title">
                {item.title ? item.title : item.original_name}
              </h2>
              <p className="items-heading-vote">{item.vote_average}</p>
              <h5 className="items-heading-overview">{item.overview}</h5>
              <div className="items-button">
                <IconButton
                  size="lg"
                  icon={<PlayOutlineIcon />}
                  placement="left"
                  onClick={() => setOpen(true) }
                >
                  Play
                  {open ? <ModalTrailer setShow = {open} /> : ""}
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
            <div className="items-poster_path">
              <img
                className="items-poster_path-img"
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
