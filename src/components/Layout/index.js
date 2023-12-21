import React from "react";
import { useTheme } from '../../utils/themeContext';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CryptoDetails from "../CryptoDetails.js";
import Header from "./Header";
import { Box } from "@mui/material";

function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <Box class="h-screen" sx={{ color: "primary.text", backgroundColor: "inherit", bgcolor: 'primary.main' }}>
      <MuiThemeProvider theme={theme}>
        <Header />
        <CryptoDetails />
        {/* <main className="p-5"> */}
        <Box>{children}</Box>
        {/* </main> */}
      </MuiThemeProvider>
    </Box>
  );
}

export default Layout;
