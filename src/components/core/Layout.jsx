import { useEffect } from "react";
import classNames from "classnames";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import { useTheme } from "../../providers/ThemeProvider";

export default function Layout({ children }) {
  const { isLightTheme } = useTheme();

  useEffect(() => {
    document.body.style.background = isLightTheme ? "#e9e6e6" : "#444";
  }, [isLightTheme]);
  return (
    <div
      className={classNames("app", {
        dark: !isLightTheme,
      })}
    >
      <Header />
      <div className="container">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
