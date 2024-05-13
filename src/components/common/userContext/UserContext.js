import React, { createContext, useEffect, useState } from "react";
import { fetchCurrentUser } from "../../../api/v1/user/UserQueries";
import { AuthQueries } from "../../../api/v1/auth";
import { useNavigate } from "react-router-dom";
import TokenHandler from "../../../utils/TokenHandler";

const unauthenticatedRoutes = [
  "/login",
  "/signup",
  "/",
  "/news&blog",
  "/radio",
];

//Context-Objekt für den Benutzerstatus
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const logOutUser = () => {
    setUser(null);
    TokenHandler.deleteAccessToken();
  };
  //Funktion zum Abrufen der Benutzerdaten
  async function fetchUserData() {
    try {
      const result = await fetchCurrentUser();
      if (result.profile) {
        setUser(result.profile);
      }
    } catch (e) {
      if (e.response.status === 401 || e.response.status === 403) {
        logOutUser();
      }
    }
  }

  const logInUser = async (email, password) => {
    const response = await AuthQueries.loginUser(email, password);

    if (response.user) {
      setUser(response.user);
      navigate("/");
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, logInUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
