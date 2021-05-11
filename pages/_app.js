import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { ContextProvider } from "../context/AppContext";
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
        <ContextProvider>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />;
            </ThemeProvider>
        </ContextProvider>
    );
}

export default MyApp;
