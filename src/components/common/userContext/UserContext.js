import React, { createContext, useEffect, useState } from "react";
import { Axios } from "axios";
// import { UserDataGuest } from "../../../api/userData/UserDataGuest";
import { fetchAllUser } from "../../../api/v1/user/UserQueries";
import { AuthQueries } from "../../../api/v1/auth";
import { json } from "react-router-dom";

//Context-Objekt für den Benutzerstatus

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  //Funktion zum Abrufen der Benutzerdaten

  async function fetchUserDatas() {
    const data = await fetchAllUser();
    setUser(data);
  }
  const logOutUser = () => {};
  const logInUser = (email, password) => {
    console.log(user);
    const foundUser = user.find(
      (userdata) => userdata.email === email && userdata.password === password
    );
    console.log(foundUser);
    if (foundUser) {
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(foundUser));
    }
  };
  useEffect(() => {
    fetchUserDatas();
  }, []);

  useEffect(() => {
    const cachedUserData = localStorage.getItem("user");
    console.log(cachedUserData);
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setIsLoggedIn, isLoggedIn, logInUser, logOutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
