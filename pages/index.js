import { Container } from "@material-ui/core";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";

export default function Home() {
    return (
        <>
            <NavBar />
            <Container>
                <ProductCard />
            </Container>
        </>
    );
}
