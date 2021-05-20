import { makeStyles } from "@material-ui/core/styles";

const productModal = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        maxHeight: "90vh",
        height: 600,
        width: 440,
        [theme.breakpoints.up(2560)]: {
            height: 1000,
            width: 800,
        },
    },
    buyButton: {
        height: 34,
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            fontSize: 10,
            height: 28,
            minWidth: 40,
        },
    },
    productImage: {
        width: "100%",
    },
    quantityButton: {
        minWidth: 10,
    },
    quantity: {
        width: 60,
        margin: theme.spacing(0, 1),
    },
    priceText: {
        marginTop: theme.spacing(2),
    },
    totalPrice: {
        color: "#FA591D",
        fontWeight: theme.typography.fontWeightBold,
    },
    actionField: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
}));

export default productModal;
