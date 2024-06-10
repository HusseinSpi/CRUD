import { useState, useEffect } from "react";

export const useSearch = () => {
  const [favoriteData, setFavoriteData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [searchData, setSearchData] = useState([]);

  return {
    favoriteData,
    setFavoriteData,
    searchData,
    setSearchData,
    searchInput,
    setSearchInput,
    cartData,
    setCartData,

    handleSearchChange: (data, value) => {
      let arr = [];
      setSearchInput(value);
      setSearchData([]);
      setSearchData(
        data.map((item) => {
          if (item.name.includes(value)) {
            return item.name;
          }
        })
      );
      console.log(searchData);
    },
  };
};
