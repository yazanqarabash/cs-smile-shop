import * as React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ProductCount from "./ProductCount";
import SuccessSnackbar from "../UI/SuccessSnackbar";
import GoBackBtn from "../UI/GoBackBtn";
import {
  Box,
  Divider,
  CardMedia,
  Card,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

function ProductDetail({ id, title, price, stock, description, image }) {
  const { addItemToCart, isInCart } = React.useContext(CartContext);
  const [showSuccessBar, setShowSuccessBar] = React.useState(false);

  const handleAddItemToCart = (quantity) => {
    if (isInCart(id) || quantity === 0) return;
    addItemToCart({ id, title, price, quantity, image });
    setShowSuccessBar(true);
  };
  return (
    <>
      <Grid
        container
        my={5}
        className="animate__animated animate__fadeIn"
        spacing={6}
      >
        <Grid
          item
          sm={6}
          md={4}
          mt={6}
          className="animate__animated animate__fadeIn"
        >
          <Card raised>
            <CardMedia
              component="img"
              image={image}
              alt={id}
              sx={{ height: { xs: "100%", sm: 400 }, objectFit: "contain" }}
            />
          </Card>
          <Box
            display="flex"
            justifyContent="space-between"
            mt={2}
            alignContent="center"
          >
            <GoBackBtn />

            <Typography component="h5" variant="h6" textAlign="center">
              {price} KR
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              component="h3"
              sx={{ my: 3, textAlign: "center" }}
              gutterBottom
            >
              {title}
            </Typography>

            <Divider />

            <Typography variant="body1" sx={{ my: 3 }}>
              {description}
            </Typography>

            <Divider />

            <Box display="flex" sx={{ justifyContent: "center", my: 3 }}>
              {isInCart(id) ? (
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<AssignmentTurnedInIcon />}
                  component={Link}
                  to="/cart"
                >
                  Continue to Checkout
                </Button>
              ) : stock > 0 ? (
                <ProductCount stock={stock} onAdd={handleAddItemToCart} />
              ) : (
                <Typography variant="h6" color="textSecondary">
                  Out of stock
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
      {showSuccessBar && <SuccessSnackbar message={"Product added to cart"} />}
    </>
  );
}

export default ProductDetail;
