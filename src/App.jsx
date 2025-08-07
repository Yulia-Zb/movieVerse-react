import { useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AppRouter from "./components/AppRouter";
import "./assets/css/style.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
