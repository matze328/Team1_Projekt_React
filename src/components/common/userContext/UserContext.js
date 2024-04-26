import React, { createContext, useEffect, useState } from "react";
import UserQueries, { fetchAllUser } from "../../../api/v1/user/UserQueries";
import { AuthQueries } from "../../../api/v1/auth";

const unauthenticatedRoutes = ["/login", "/signup", "/"];

//Context-Objekt für den Benutzerstatus
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function getCurrentUserFromLocalStorage() {
    const user = localStorage.getItem("user");
    if (!user) return;
    const jsonUser = await JSON.parse(user);
    if (jsonUser) {
      setUser(jsonUser);
    }
    return jsonUser;
  }

  //Funktion zum Abrufen der Benutzerdaten
  async function fetchUserData() {
    const currentUser = await getCurrentUserFromLocalStorage();
    if (!currentUser) {
      setUser(null);
      if (!unauthenticatedRoutes.includes(window.location.pathname)) {
        window.location.href = "http://localhost:3000/login";
      }
      return;
    }
    const data = await UserQueries.fetchUserById(currentUser.userId);
    if (data.profile) {
      localStorage.setItem("user", JSON.stringify(data.profile));
      setUser(data.profile);

    }
  }
  const logOutUser = () => {
    localStorage.removeItem("user");
  };
  const logInUser = async (email, password) => {
    const response = await AuthQueries.loginUser(email, password);
    if (response.user) {
      localStorage.setItem("user", JSON.stringify(response.user));
      window.location.href = "http://localhost:3000/";
    }
  };
  useEffect(() => {
    fetchUserData();
    console.log("hallo123");
  }, []);

  return (
    <UserContext.Provider value={{ user, logInUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
