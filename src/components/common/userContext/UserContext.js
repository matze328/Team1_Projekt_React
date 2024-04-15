import React, { createContext, useEffect, useState } from "react";
import { Axios } from "axios";
import { UserDataGuest } from "../../../api/userData/UserDataGuest";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userResponse = UserDataGuest;
    setUsers(userResponse);
  }, []);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};
export default UserContext;
