import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Nav, Navbar } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./TopNav.css";
export default function TopNav() {
  const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  ));
  return (
    <Navbar className="navbar">
      <Navbar.Brand as={NavLink} href="/">
        <img
          src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
          className="navbar_logo"
        />
      </Navbar.Brand>
      <Nav>
        <Nav.Item eventKey="home" as={NavLink} href="/" >Home</Nav.Item>
        <Nav.Item eventKey="movies" as={NavLink} href="/movies" >Movies</Nav.Item>
        <Nav.Item eventKey="tvShows" >TV Shows</Nav.Item>
        <Dropdown title="About">
          <Dropdown.Item>Company</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
        </Dropdown>
      </Nav>
      <Nav pullRight>
        <Nav.Item>Sign In</Nav.Item>
      </Nav>
    </Navbar>
  );
}
