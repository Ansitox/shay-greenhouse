import { createRoot } from "react-dom/client";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import {
  ThemeContext,
  ThemeProvider as ThemeContextProvider,
} from "./context/ThemeContext";
import App from "./App.jsx";
import "./index.css";
import { useContext } from "react";

const Root = () => {
  const { theme } = useContext(ThemeContext);
  const themeObj = { ...theme };

  return (
    <MuiThemeProvider theme={themeObj}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  );
};

const Main = () => {
  return (
    <ThemeContextProvider>
      <Root />
    </ThemeContextProvider>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
