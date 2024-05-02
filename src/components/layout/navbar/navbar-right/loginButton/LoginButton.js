import { useContext } from "react";
import StandardBtn from "../../../../common/buttons/standard-btn";
import UserContext from "../../../../common/userContext/UserContext";

function LoginButton({ isLoggedIn }) {
  const { logOutUser } = useContext(UserContext);

  const redirectToLogin = () => {
    window.location.href = "http://localhost:3000/login";
  };
  const redirectToStart = () => {
    logOutUser();
    window.location.href = "http://localhost:3000/";
  };

  return (
    <StandardBtn
      text={isLoggedIn ? "LogOut" : "LogIn"}
      onClick={isLoggedIn ? redirectToStart : redirectToLogin}
    />
  );
}

export default LoginButton;
