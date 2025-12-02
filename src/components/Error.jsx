import Navbar from "./Navbar";
import Footer from "./Footer";
import { Typography, Container, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Error() {
    return (
        <>
            <Navbar />
            <Container sx={{ textAlign: "center", mt: 8, minHeight: "60vh" }}>
                {/* Big 404 Text */}
                <Typography variant="h1" fontWeight={700} color="error">
                    404
                </Typography>

                {/* Fun Emoji */}
                <Typography variant="h4" fontWeight={600} sx={{ mt: 2 }}>
                    😵 Oops! Page Not Found
                </Typography>

                {/* Description */}
                <Typography variant="body1" sx={{ mt: 2, color: "gray" }}>
                    The page you are looking for doesn’t exist or has been moved.
                </Typography>

                {/* Go Back Button */}
                <Box sx={{ mt: 4 }}>
                    <Button
                        component={Link}
                        to="/"
                        variant="contained"
                        sx={{
                            background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
                            color: "white",
                            px: 4,
                            py: 1.5,
                            borderRadius: 3,
                            "&:hover": {
                                background: "linear-gradient(135deg, #ff4b2b, #ff416c)",
                            },
                        }}
                    >
                        Go Back Home
                    </Button>
                </Box>
            </Container>
            <Footer />
        </>
    );
}

export default Error;
