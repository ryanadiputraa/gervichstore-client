import { makeStyles } from "@material-ui/core";

const productCard = makeStyles((theme) => ({
    card: {
        width: 280,
        height: 380,
        padding: theme.spacing(1.5),
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
        marginBottom: theme.spacing(2),
    },
    productName: {
        lineHeight: 1.2,
        fontWeight: theme.typography.fontWeightMedium,
    },
    productPrice: {
        fontWeight: theme.typography.fontWeightRegular,
    },
    productAction: {
        padding: 0,
        justifyContent: "flex-end",
    },
}));

export default productCard;
