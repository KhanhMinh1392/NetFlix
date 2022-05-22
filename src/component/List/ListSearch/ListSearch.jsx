import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Row } from "rsuite";
import urlConfig from "../../../config/urlConfig";
import LoadingPage from "../../Loading/LoadingPage/LoadingPage";
import "./ListSearch.css";
export default function ListSearch({ data, isLoading }) {
  return (
    <div className="list-search">
      {isLoading ? (
        <div>
          <LoadingPage />
        </div>
      ) : (
        <Row className="show-grid" gutter={4}>
          {data.map((item,index) => (
            <Col key={index} xs={4}>
              <NavLink to={`/movie/${item.id}`}>
                <img
                  src={urlConfig.url_img + item.poster_path}
                  className="list-img"
                />
              </NavLink>
             
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
