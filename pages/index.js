import { Button, Container, Typography } from "@material-ui/core";
import Head from "next/head";
import { useReducer } from "react";

export default function Home() {
    return (
        <>
            <Head>
                <title>GERVICHSTORE.ID</title>
                <meta
                    name="description"
                    content="GERVICHSTORE.ID fashion marketplace"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Typography variant="h4" component="h1">
                    GERVICHSTORE.ID
                </Typography>
            </Container>
        </>
    );
}
