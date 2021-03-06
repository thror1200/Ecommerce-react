import React, { useState } from "react";

import "./Nav.scss";
import { Link } from "react-router-dom";

import SearchList from "../SearchList/SearchList";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="nav">
        <Link to="/">
          <div className="nav__logo">
            <img src={"/assets/images/logo.png"} alt="logo" />
          </div>
        </Link>
        <i className="fas fa-bars" onClick={() => setOpen(!open)}></i>
        <ul className={"nav__menu"} style={{ left: open ? "0px" : "-100%" }}>
          <i className="far fa-times-circle close-icon" onClick={() => setOpen(!open)}></i>
          <li className="nav__menu--item">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              TRANG CHỦ
            </Link>
          </li>
          <li className="nav__menu--item">
            <Link to="/laptop" style={{ textDecoration: "none", color: "inherit" }}>
              LAPTOP
            </Link>
          </li>
          <li className="nav__menu--item">
            <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
              GIỎ HÀNG
            </Link>
          </li>
          <li className="nav__menu--item">
            <Link to="/news" style={{ textDecoration: "none", color: "inherit" }}>
              TIN TỨC
            </Link>
          </li>
          <li className="nav__menu--item">
            <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
              ĐĂNG NHẬP
            </Link>
          </li>
        </ul>
        <div className="nav__search-bar">
          <SearchList />
        </div>
      </div>
    </div>
  );
}

export default Nav;
