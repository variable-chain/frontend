import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#333",
            text: "#fff"
        },
        secondary: {
            main: "#fff",
        },
    },
});

export default lightTheme;
