import React from "react";
import { Col, Divider, FlexboxGrid, Tag } from "rsuite";
import urlConfig from "../../config/urlConfig";
import "./MovieDetail.css";

export default function MovieDetail({ movie, genres, language }) {
  // const arr = movie.genres;

  // const [genres,setGenres] = useState([arr]);
  return (
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
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </div>
  );
}
