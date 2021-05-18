import { makeStyles } from "@material-ui/core";

const footer = makeStyles((theme) => ({
    footer: {
        background: theme.palette.primary.main,
        padding: theme.spacing(4, 0),
        color: theme.palette.secondary.main,
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(0),
        },
    },
    footerSection: {
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing(5, 0),
        },
    },
    footerInfo: {
        display: "flex",
        flexDirection: "row",
        marginTop: theme.spacing(2),
    },
    footerSubInfo: {
        color: theme.palette.secondary.dark,
    },
    infoIcons: {
        color: "#00adff",
        marginRight: theme.spacing(1),
    },
    socialSection: {
        marginTop: theme.spacing(2),
    },
    socialIcons: {
        marginRight: theme.spacing(2),
    },
}));

export default footer;
