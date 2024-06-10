import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Icons from "./Icons";
import { FaHome } from "react-icons/fa";

const Navbar = ({ data, setData, getData }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response);
    };

    fetchData();
  }, []);

  console.log("this is data in icon", data);
  return (
    <nav className="navbar">
      <div className="icon" onClick={() => navigate("/")}>
        <FaHome />
      </div>
      <SearchBar data={data} />
      <Icons data={data} />
    </nav>
  );
};

export default Navbar;
