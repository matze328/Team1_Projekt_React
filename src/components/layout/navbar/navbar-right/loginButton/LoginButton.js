import { useState } from "react";
import StandardBtn from "../../../../common/buttons/standard-btn";



//Aufgabe 2: useState für Login/Logged In nutzen
//Macht es wie in Toms FollowBTN
//Hier alternative Lösung!
function LoginButton({ setIsLoggedIn, isLoggedIn  }) {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  //Ich bereite 2 Variablen vor. Eine soll den Text, die andere die
  //passende onClick Function beinhalten
  let logInText = "";
  let onClick;
  const redirectToLogin = () => {
    window.location.href = "http://localhost:3000/login";
  };
  const redirectToStart = () => {
    window.location.href = "http://localhost:3000/";
  };
  function setIsLoggedInFalse() {
    setIsLoggedIn(false);
  }
  if (isLoggedIn) {
    //Wenn wir eingeloggt sind, muss der Button LogOut oder LoggedIn zeigen
    //und das klicken muss uns ausloggen ("isLoggedIn = false")
    logInText = "LogOut";
    onClick = redirectToStart;
  } else {
    logInText = "LogIn";
    onClick = redirectToLogin;
    
  }
  return <StandardBtn text={logInText} onClick={onClick} />;
}

export default LoginButton;
