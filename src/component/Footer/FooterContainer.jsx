import React from "react";
import { Col, FlexboxGrid } from "rsuite";
import "./FooterContainer.css";
export default function FooterContainer() {
  return (
    <div className="member-footer">
      <div className="show-grid">
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item as={Col} colspan={24} md={6}>
            <img
              src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
              className="footer-logo"
            />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} colspan={24} md={6} className="footer-text">
            <p>Movie DB API</p>
            <p>React Suite</p>
            <p>React JS</p>
            <p>Swiper</p>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} colspan={24} md={6} smHidden className="footer-text">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Github</p>
            <p>Zalo</p>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} colspan={24} md={4} smHidden className="footer-text">
            <p>Name: Dao Khanh Minh</p>
            <p>Class: 18DTHC4 Hutech</p>
            <p>Major: Software Developer</p>
            <p>Email: minhdao933@gmail.com</p>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        
      </div>
    </div>
  );
}
