import SearchIcon from "@rsuite/icons/Search";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AutoComplete, Dropdown, InputGroup, Nav, Navbar } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./TopNav.css";
export default function TopNav() {
  const navigate = useNavigate();
  const searchRef = useRef();

  const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  ));
  const styles = {
    width: 250,
    marginRight: 10,
  };
  const handleSearch = (value) => {
    if(value === "") {
      navigate("/");
    } else {
      navigate(`/search?q=${value}`,{state: {query: value}});
    }
  };
  return (
    <Navbar className="navbar">
      <Navbar.Brand as={NavLink} href="/">
        <img
          src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
          className="navbar_logo"
        />
      </Navbar.Brand>
      <Nav>
        <Nav.Item eventKey="home" as={NavLink} href="/">
          Home
        </Nav.Item>
        <Nav.Item eventKey="movies" as={NavLink} href="/movies">
          Movies
        </Nav.Item>
        <Nav.Item eventKey="tvShows">TV Shows</Nav.Item>
        <Dropdown title="About">
          <Dropdown.Item>Company</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
        </Dropdown>
      </Nav>
      <Nav pullRight className="navbar-right">
        <div className="navbar-search">
          <InputGroup inside style={styles}>
            <AutoComplete
              ref={searchRef}
              placeholder="Search movies"
              onChange={(e)=> handleSearch(e)}
            />
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
        </div>

        <Nav.Item>Sign In</Nav.Item>
      </Nav>
    </Navbar>
  );
}
