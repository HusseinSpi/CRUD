import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { useSearch } from "../../Hook/UseSearch";

const SearchBar = ({ data }) => {
  const searchRef = useRef(null);
  console.log(data);
  const { searchInput, searchData, setSearchData, handleSearchChange } =
    useSearch();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!searchRef.current.contains(event.target)) {
        setSearchData([]);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Search products..."
        value={searchInput}
        ref={searchRef}
        onChange={() => handleSearchChange(data, searchRef.current.value)}
      />
      <ul className="search-results">
        {searchData.map((result, index) =>
          result != undefined ? <li key={index}>{result}</li> : null
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
