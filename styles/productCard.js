import { makeStyles } from "@material-ui/core";

const productCard = makeStyles((theme) => ({
    card: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 300,
        height: 380,
        padding: theme.spacing(1.5),
        margin: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            height: 350,
        },
    },
    media: {
        height: 220,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
    },
    productContent: {
        padding: theme.spacing(0),
        marginTop: theme.spacing(1),
    },
    productName: {
        lineHeight: 1.2,
        fontWeight: theme.typography.fontWeightMedium,
        [theme.breakpoints.down("xs")]: {
            fontSize: 12,
        },
    },
    productPrice: {
        fontWeight: theme.typography.fontWeightRegular,
        [theme.breakpoints.down("xs")]: {
            fontSize: 12,
        },
    },
    productAction: {
        padding: 0,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    actionButton: {
        height: 34,
        [theme.breakpoints.down("xs")]: {
            fontSize: 10,
            height: 28,
            minWidth: 40,
        },
    },
}));

export default productCard;
