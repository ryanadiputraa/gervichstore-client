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
import ProductModal from "./productModal";

export default function ProductCard({ productData }) {
    const styles = productCard();
    const { dispatch } = useAppContext();

    return (
        <Card className={styles.card} elevation={3} id={productData.id}>
            <CardMedia
                className={styles.media}
                image={productData.image}
                title="item-1"
            />
            <CardContent className={styles.productContent}>
                <Typography
                    className={styles.productName}
                    variant="h6"
                    component="h2"
                >
                    {productData.name}
                </Typography>
                <Typography
                    className={styles.productPrice}
                    variant="body1"
                    color="error"
                    component="p"
                >
                    Rp.{productData.price}
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
                <ProductModal productData={productData} />
            </CardActions>
        </Card>
    );
}
