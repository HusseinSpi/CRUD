import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const productLogic = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const API_Url = "https://6666adf4a2f8516ff7a45d07.mockapi.io/users";
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://6666adf4a2f8516ff7a45d07.mockapi.io/users"
        );
        const user = response.data.find((user) => user.Email === "");
        setUserData(user);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const addToFavorite = async (productId) => {
    console.log("hii");
    console.log(userData);
    if (!userData) return;

    // Check if the product is already in favorites
    if (userData.Favorite.includes(productId)) {
      console.log("Product is already in favorites");
      return;
    }

    // Update the user's favorite list
    const updatedUser = {
      ...userData,
      Favorite: [...userData.Favorite, productId],
    };

    // Send a PUT request to update the user's favorites
    try {
      await axios.put(
        `https://6666adf4a2f8516ff7a45d07.mockapi.io/users/${userData.id}`,
        updatedUser
      );
      setUserData(updatedUser); // Update local state with new favorite list
      console.log("Product added to favorites");
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };
  return {
    openProduct: (product) => {
      navigate(`/product/${product.id}`);
    },
    addToFavorite,
  };
};
export default productLogic;
