import { Grid, Typography } from "@material-ui/core";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import home from "../styles/home";

export const getStaticProps = async () => {
    try {
        const API_URL = process.env.GERVICHSTORE_SERVER;
        const res = await fetch(`${API_URL}/products`);
        const data = await res.json();
        return {
            props: { products: data },
        };
    } catch (err) {
        console.log(err);
    }

    return {
        props: { products: null },
    };
};

const renderProducts = (products, styles) =>
    products.data.map((product) => (
        <Grid
            key={product.id}
            className={styles.gridItem}
            item
            xs={6}
            sm={6}
            md={3}
        >
            <ProductCard productData={product} />
        </Grid>
    ));

export default function Home({ products }) {
    const styles = home();

    return (
        <>
            <Layout>
                <Grid container>
                    {products !== null ? (
                        renderProducts(products, styles)
                    ) : (
                        <Grid item xs={12}>
                            <Typography variant="h6" align="center">
                                Terjadi masalah pada server.
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Layout>
        </>
    );
}
