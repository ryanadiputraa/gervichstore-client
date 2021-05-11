import { Button, Container, Typography } from "@material-ui/core";
import NavBar from "../components/NavBar";
import { useAppContext } from "../context/AppContext";

export default function Home() {
    const { dispatch } = useAppContext();

    return (
        <>
            <NavBar />
            <Container>
                <Typography variant="h4" component="h1">
                    GERVICHSTORE.ID
                </Typography>
                <Button
                    variant="contained"
                    onClick={() =>
                        dispatch({ type: "ADD_TO_CART", input: "input" })
                    }
                >
                    ADD
                </Button>
            </Container>
        </>
    );
}
