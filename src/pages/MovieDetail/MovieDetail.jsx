import PlayOutlineIcon from "@rsuite/icons/PlayOutline";
import React, { useState } from "react";
import {
  ButtonToolbar,
  Col,
  Divider,
  FlexboxGrid,
  IconButton,
  Tag,
} from "rsuite";
import CarouselSimilar from "../../component/Carousel/CarouselSimilar/CarouselSimilar";
import LoadingPage from "../../component/Loading/LoadingPage/LoadingPage";
import ModalTrailerService from "../../component/ModalTrailer/ModalTrailerService";
import urlConfig from "../../config/urlConfig";
import "./MovieDetail.css";

export default function MovieDetail({
  movie,
  genres,
  language,
  similar,
  isLoading,
}) {
  const [show, setShow] = useState(false);
  const handlePlay = () => {
    setShow(true);
  };
  const handleCancel = () => {
    setShow(true);
  };
  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="detail">
          <div className="show-grid">
            <FlexboxGrid justify="space-around">
              <FlexboxGrid.Item
                as={Col}
                colspan={24}
                md={8}
                style={{ textAlign: "right" }}
              >
                <img
                  src={urlConfig.url_img + movie.poster_path}
                  className="detail-img"
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item
                as={Col}
                colspan={12}
                md={12}
                style={{ textAlign: "left" }}
              >
                <div className="detail-content">
                  <h2 className="detail-content-title">{movie.title}</h2>
                  <Divider />
                  <div className="detail-content-tag">
                    <h5>
                      Genres:
                      {genres.map((genre, i) => (
                        <div className="tag" key={i}>
                          <Tag>{genre.name}</Tag>
                        </div>
                      ))}
                    </h5>
                  </div>

                  <div className="detail-content-language">
                    <h5>
                      Language:
                      {language.map((lang, i) => (
                        <div className="language" key={i}>
                          <Tag>{lang.name}</Tag>
                        </div>
                      ))}
                    </h5>
                  </div>
                  <div className="detail-content-status">
                    <h5>Status:</h5>
                    <div className="status">
                      <h5>{movie.status}</h5>
                    </div>
                  </div>
                  <div className="detail-content-overview">
                    <h5>Overviews:</h5>
                    <p className="overview">{movie.overview}</p>
                  </div>
                </div>
                <div className="action">
                  <ButtonToolbar>
                    <IconButton
                      onClick={handlePlay}
                      className="action-play"
                      appearance="primary"
                      icon={<PlayOutlineIcon />}
                      placement="left"
                    >
                      Play
                    </IconButton>
                    {show && (
                      <ModalTrailerService
                        show={show}
                        setShow={setShow}
                        handleCancel={handleCancel}
                        idMovie={movie.id}
                      />
                    )}
                  </ButtonToolbar>
                </div>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </div>
          <div>
          <div className="show-grid">
              <div className="movie-similar">
                <FlexboxGrid justify="space-around">
                  <FlexboxGrid.Item as={Col} colspan={24} md={32}>
                    <h5 className="movie-similar-title">Episode Movies</h5>
                    <Divider />
                    
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </div>
            </div>
          </div>
          <div>
            <div className="show-grid">
              <div className="movie-similar">
                <FlexboxGrid justify="space-around">
                  <FlexboxGrid.Item as={Col} colspan={24} md={32}>
                    <h5 className="movie-similar-title">Similar Movies</h5>
                    <Divider />
                    <CarouselSimilar similar={similar} />
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
