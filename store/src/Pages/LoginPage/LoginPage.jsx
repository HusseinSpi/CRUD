import { useState, useEffect } from "react";
import { Check } from "../../Hooks/CheckEmail";
import { AddUser } from "../../Hooks/AddUser";
import { LoginForm } from "../../Components/LoginForm/LoginForm";
import "./LoginPage.css";
import { MyAccount } from "../../Components/Account/MyAccount";
import { getUserName } from "../../Hooks/GetUserName";
import { useAccount } from "../../Context/Account";
import { ToastContainer } from "react-toastify";

export const LoginPage = () => {
  const {
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    isLogIn,
    setIsLogIn,
  } = useAccount();
  const [action, setAction] = useState("Sign Up");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogIn");
    if (loggedIn === "true") {
      setIsLogIn(true);
      const storedUserName = localStorage.getItem("userName");
      if (storedUserName) {
        setUserName(storedUserName);
      }
    }
  }, []);

  const handleSubmit = async (btn) => {
    if (btn === action) {
      if (action === "Login") {
        try {
          if (await Check(email, password)) {
            setIsLogIn(true);
            localStorage.setItem("isLogIn", "true");
            localStorage.setItem("userName", await getUserName(email));
          }
        } catch (error) {
          console.error("Login error:", error);
        }
      } else {
        AddUser(userName, email, password);
      }
    } else {
      setAction(btn);
    }
  };

  return (
    <div className="container">
      <ToastContainer position="top-center" />
      {isLogIn ? (
        <MyAccount userName={userName} isLogIn={isLogIn} />
      ) : (
        <LoginForm
          action={action}
          userName={userName}
          setUserName={setUserName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
