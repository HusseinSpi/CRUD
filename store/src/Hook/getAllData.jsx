import { useState, useEffect } from "react";
import axios from "axios";

const getAllData = async () => {
  try {
    const response = await axios.get(
      "https://66669ce5a2f8516ff7a4059f.mockapi.io/products"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default getAllData;
