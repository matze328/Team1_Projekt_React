import React, { createContext, useEffect, useState } from "react";
import { Axios } from "axios";
// import { UserDataGuest } from "../../../api/userData/UserDataGuest";
import { fetchAllUser } from "../../../api/v1/user/UserQueries";

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

  useEffect(() => {
    fetchUserDatas();
  }, []);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={{ user, setIsLoggedIn, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
