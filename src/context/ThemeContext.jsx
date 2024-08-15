import { createContext, useState } from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    background: {
      default: "#faf6e9",
    },
    text: {
      primary: "#3e6048",
    },
    primary: {
      main: "#8ac58f",
    },
    secondary: {
      main: "#f5c1bc",
    },
    accent: {
      main: "#ecebb1",
    },
    border: {
      main: "#d6d6d6",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#faf6e9",
          backgroundColor: "#8ac58f",
          "&:hover": {
            backgroundColor: "#ecebb1",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#3e6048",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#ecebb1",
          borderColor: "#d6d6d6",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#faf6e9",
          borderColor: "#d6d6d6",
          color: "#3e6048",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#3e6048",
        },
      },
    },
  },
});

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const data = { theme, setTheme };

  return (
    <ThemeContext.Provider value={{ data }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
