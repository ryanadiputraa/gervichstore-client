import { fade, makeStyles } from "@material-ui/core/styles";

const navbar = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    logo: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    menuIcon: {
        marginRight: 4,
        [theme.breakpoints.up("sm")]: {
            marginRight: 10,
        },
        [theme.breakpoints.up("lg")]: {
            marginRight: 30,
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        color: theme.palette.primary.light,
        zIndex: 1,
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: theme.palette.primary.light,
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        background: "#fff",
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "35ch",
        },
    },
    sectionDesktop: {
        display: "flex",
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));

export default navbar;
