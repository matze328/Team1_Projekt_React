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
import Sidebar from "./components/layout/sidebar-home/Sidebar";
import NewsPage from "./pages/news-page";
import LogInPage from "./pages/login-page";
import UserPage from "./pages/user-page";
import StartPage from "./pages/start-page";
import SidebarStart from "./components/layout/sidebar-start/SidebarStart";
import RadioPage from "./pages/radio-page";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <SidebarStart />
      <Content>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/todo" element={<ToDoPage />} />
          <Route path="/radio" element={<RadioPage />} />
          <Route path="/news&blog" element={<NewsPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
