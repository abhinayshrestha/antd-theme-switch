import { BrowserRouter } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import "./less/light.less";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import DynamicTheming from "./DynamicTheming";
import SelectTag from "./SelectTag";
import { Card } from "antd";

function App() {
  const themes = {
    light: `${process.env.PUBLIC_URL}/light.min.css`,
    dark: `${process.env.PUBLIC_URL}/dark.min.css`,
  };
  return (
    <BrowserRouter>
        <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
          <AppLayout />
        </ThemeSwitcherProvider>
      {/* <DynamicTheming /> */}
    </BrowserRouter>
  );
}

export default App;
