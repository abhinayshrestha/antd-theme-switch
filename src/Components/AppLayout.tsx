import { Card, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import { useThemeSwitcher } from "react-css-theme-switcher";

function AppLayout() {
  const [toggleTheme, setToggleTheme] = useState(false);
  const { switcher, themes, currentTheme } = useThemeSwitcher();

  const toggleThemeHandler = () => {
    setToggleTheme((prev) => {
      switcher({ theme: prev ? themes.light : themes.dark });
      localStorage.setItem("theme", prev ? themes.light : themes.dark)
      return !prev;
    });
  };

  useEffect(() => {
     const theme = localStorage.getItem("theme"); 
     if(theme) {
       setToggleTheme(theme !== "light")
           localStorage.setItem("theme", theme === "light" ? "light" : "dark" )
            switcher({ theme: theme === "light" ? themes.light : themes.dark });
     }
     else {
        setToggleTheme(() => {
            switcher({ theme: themes.light });
            localStorage.setItem("theme", themes.light)
            return true;
          });
     }
  }, [switcher, themes.dark, themes.light])
  
  

  return (
    <div className="bg">
      <Card
        title={
          <div className="d-flex space-between align-center">
            <Typography.Title level={5}>Antd Card</Typography.Title>
            <Switch checked={toggleTheme} onChange={toggleThemeHandler} />
          </div>
        }
      >
        This is a theme card implemented in antd to demonstrate dark and light
        theme
      </Card>
    </div>
  );
}

export default AppLayout;
