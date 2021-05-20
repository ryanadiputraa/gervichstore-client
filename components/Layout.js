import { Container } from "@material-ui/core";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <Container style={{ minHeight: "85vh" }}>{children}</Container>
            <Footer />
        </>
    );
}
