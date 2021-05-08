import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "../styles/globals.css";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Montserrat",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />;
        </ThemeProvider>
    );
}

export default MyApp;
