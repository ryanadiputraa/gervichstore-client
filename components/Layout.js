import { Container } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <Container>{children}</Container>
        </>
    );
}
