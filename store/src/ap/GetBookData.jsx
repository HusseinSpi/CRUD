import { useState, useEffect } from "react";
import axios from "axios";

export const GetBookData = () => {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBooksData = async () => {
    try {
      const response = await axios.get(
        "https://66669ce5a2f8516ff7a4059f.mockapi.io/products"
      );
      setBooksData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setBooksData([]); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooksData();
  }, []);

  return { booksData, loading };
};
