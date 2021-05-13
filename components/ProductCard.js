import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import React from "react";
import { useAppContext } from "../context/AppContext";
import productCard from "../styles/productCard";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default function ProductCard() {
    const styles = productCard();
    const { dispatch } = useAppContext();

    return (
        <Card className={styles.card} elevation={3}>
            <CardMedia
                className={styles.media}
                image="/images/item-1.jpg"
                title="item-1"
            />
            <CardContent className={styles.productContent}>
                <Typography
                    className={styles.productName}
                    variant="h6"
                    component="h2"
                >
                    Kaos Polos Cotton Combad 30s
                </Typography>
                <Typography
                    className={styles.productPrice}
                    variant="body1"
                    color="error"
                    component="p"
                >
                    Rp.50.000
                </Typography>
            </CardContent>
            <CardActions className={styles.productAction}>
                <Button
                    onClick={() => dispatch({ type: "ADD_TO_CART" })}
                    className={styles.actionButton}
                    variant="contained"
                    color="primary"
                    size="medium"
                    endIcon={<AddShoppingCartIcon style={{ marginLeft: -8 }} />}
                ></Button>
                <Button
                    className={styles.actionButton}
                    size="small"
                    variant="contained"
                    color="primary"
                >
                    Beli
                </Button>
            </CardActions>
        </Card>
    );
}
