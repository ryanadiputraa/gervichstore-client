import React, { useState, useEffect } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import productModal from "../styles/productModal";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function TransitionsModal({ productData }) {
    const styles = productModal();
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [isSubstractDisable, setIsSubstractDisable] = useState(false);
    const [isAddDisable, setIsAddDisable] = useState(false);
    const [totalPrice, setTotalPrice] = useState(productData.price);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddQuantity = () => {
        quantity === productData.stock
            ? setIsAddDisable(true)
            : setQuantity((currentState) => (currentState += 1));
    };

    const handleSubstractQuantity = () => {
        quantity === 1
            ? setIsSubstractDisable(true)
            : setQuantity((currentState) => (currentState -= 1));
    };

    const handleBuyProduct = () => {};

    useEffect(() => {
        quantity === 1
            ? setIsSubstractDisable(true)
            : setIsSubstractDisable(false);
        quantity === productData.stock
            ? setIsAddDisable(true)
            : setIsAddDisable(false);
        setTotalPrice(productData.price * quantity);
    }, [quantity]);

    return (
        <div>
            <Button
                className={styles.buyButton}
                size="small"
                variant="contained"
                color="primary"
                type="button"
                onClick={handleOpen}
            >
                BELI
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={styles.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={styles.paper}>
                        <img
                            src={productData.image}
                            className={styles.productImage}
                        />
                        <Typography variant="h6" component="h2">
                            {productData.name}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="error"
                            component="p"
                            gutterBottom
                        >
                            Rp.{productData.price}
                        </Typography>
                        <div>
                            <Button
                                className={styles.quantityButton}
                                variant="contained"
                                color="primary"
                                size="medium"
                                endIcon={
                                    <RemoveIcon style={{ marginLeft: -8 }} />
                                }
                                disabled={isSubstractDisable}
                                onClick={handleSubstractQuantity}
                            ></Button>
                            <TextField
                                className={styles.quantity}
                                inputProps={{
                                    style: { textAlign: "center" },
                                }}
                                value={quantity}
                            />
                            <Button
                                className={styles.quantityButton}
                                variant="contained"
                                color="primary"
                                size="medium"
                                endIcon={<AddIcon style={{ marginLeft: -8 }} />}
                                disabled={isAddDisable}
                                onClick={handleAddQuantity}
                            ></Button>
                            {isAddDisable ? (
                                <Typography
                                    variant="body1"
                                    color="error"
                                    component="p"
                                    gutterBottom
                                >
                                    Stok barang yang tersedia hanya{" "}
                                    {productData.stock}
                                </Typography>
                            ) : null}
                            <Typography
                                className={styles.priceText}
                                variant="body1"
                                component="p"
                            >
                                Total Pembayaran :{" "}
                                <span className={styles.totalPrice}>
                                    Rp.{totalPrice}
                                </span>
                            </Typography>
                        </div>
                        <div className={styles.actionField}>
                            <Button
                                className={styles.buyButton}
                                size="small"
                                variant="contained"
                                color="primary"
                                type="button"
                                onClick={handleClose}
                            >
                                Batal
                            </Button>
                            <Button
                                className={styles.buyButton}
                                size="small"
                                variant="contained"
                                color="primary"
                                type="button"
                                onClick={handleBuyProduct}
                            >
                                BELI
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
