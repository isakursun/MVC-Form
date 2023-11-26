import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Forum</h1>
      <NavLink to={"/add-post"}>Gönderi Ekle</NavLink>
      <NavLink to={"/"}>Gönderiler</NavLink>
    </header>
  );
};

export default Header;
