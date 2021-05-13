import { Grid } from "@material-ui/core";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import home from "../styles/home";

export default function Home() {
    const styles = home();

    return (
        <>
            <Layout>
                <Grid container>
                    <Grid className={styles.gridItem} item xs={6} sm={6} md={3}>
                        <ProductCard />
                    </Grid>
                    <Grid className={styles.gridItem} item xs={6} sm={6} md={3}>
                        <ProductCard />
                    </Grid>
                    <Grid className={styles.gridItem} item xs={6} sm={6} md={3}>
                        <ProductCard />
                    </Grid>
                    <Grid className={styles.gridItem} item xs={6} sm={6} md={3}>
                        <ProductCard />
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}
