import React from "react";
import { Dropdown } from "rsuite";
import "./Movie.css";
export default function Movies({ genres }) {
  return (
    <div className="movie">
      <div className="movie-heading">
        <div className="movie-heading-left">
          <h2 className="movie-heading-text">Movie</h2>
          <div className="movie-heading-genre">
            {
              <Dropdown title="Genres" >
                {genres.map((item, index) => (
                  <Dropdown.Item eventKey="a" key={index} >
                    {item.name}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
