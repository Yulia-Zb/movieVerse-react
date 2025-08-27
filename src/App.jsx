import { useEffect } from "react";
import { useLocation } from "react-router";
import Layout from "./components/core/Layout";
import AppRouter from "./components/core/AppRouter";
import "./assets/css/style.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
