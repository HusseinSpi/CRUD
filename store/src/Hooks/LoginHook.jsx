import { FetchUsers } from "../api/UserData";

export const LoginHook = async (email, password) => {
  try {
    const users = await FetchUsers();
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.Email === email && user.Password === password) {
        localStorage.setItem(user.Email);
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
