import { useContext } from "react";
import StandardBtn from "../../../../common/buttons/standard-btn";
import UserContext from "../../../../common/userContext/UserContext";
import { useNavigate } from "react-router-dom";

function LoginButton({ isLoggedIn }) {
  const navigate = useNavigate();
  const { logOutUser } = useContext(UserContext);

  const redirectToLogin = () => {
    navigate("/login");
  };
  const redirectToStart = () => {
    logOutUser();
  };

  return (
    <StandardBtn
      text={isLoggedIn ? "LogOut" : "LogIn"}
      onClick={isLoggedIn ? redirectToStart : redirectToLogin}
    />
  );
}

export default LoginButton;
