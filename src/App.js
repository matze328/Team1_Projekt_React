import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/layout/navbar";
import "./styles/App.css";
import "./styles/GlobalVars.css";
import HomePage from "./pages/home-page";
import ImpressumPage from "./pages/impressum-page";
import Content from "./components/layout/content";
import AboutMePage from "./pages/aboutme-page";
import Footer from "./components/layout/footer";
import ToDoPage from "./pages/todo-page/";
import NewsPage from "./pages/news-page";
import LogInPage from "./pages/login-page";
import UserPage from "./pages/user-page";
import StartPage from "./pages/start-page";
import RadioPage from "./pages/radio-page";
import SignUpPage from "./pages/signup-page";
import Datenschutz from "./pages/impressum-page/datenschutz";
import RechtlicheHinweise from "./pages/impressum-page/RechtlicheHinweise.js";
import FavoritenPage from "./pages/favoriten-page";
import AccountPage from "./pages/account-page/AccountPage.js";
import ProfileSettings from "./pages/account-page/ProfileSettings.js";
import ResetPassword from "./pages/account-page/ResetPassword.js";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Content>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/RechtlicheHinweise" element={<RechtlicheHinweise />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/todo" element={<ToDoPage />} />
          <Route path="/radio" element={<RadioPage />} />
          <Route path="/news&blog" element={<NewsPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/favoriten" element={<FavoritenPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/profileSettings" element={<ProfileSettings />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
