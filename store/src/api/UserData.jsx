import axios from "axios";

export const FetchUsers = async () => {
  const url = "https://6666adf4a2f8516ff7a45d07.mockapi.io/users";

  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
