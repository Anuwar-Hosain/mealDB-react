import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="w-4/5 mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">anuRestaurant</h1>
        </div>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
