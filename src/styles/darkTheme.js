import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    // dark theme configuration
    palette: {
        type: "dark",
        primary: {
            main: "#fff",
        },
        secondary: {
            main: "#333",
        },
    },
});

export default darkTheme;
