import * as React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/Cart/CartItem";
import EmptyCart from "../components/Cart/EmptyCart";
import GoBackBtn from "../components/UI/GoBackBtn";
import { Button, Typography, Divider, Container, Box } from "@mui/material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

function CartPage() {
  const { amountOfItemsInCart, totalCartPrice, cart, removeItemFromCart } =
    React.useContext(CartContext);

  return (
    <>
      <Typography
        component={"h2"}
        variant="h3"
        sx={{ fontWeight: 800, my: 3 }}
      >{`My cart (${amountOfItemsInCart()})`}</Typography>
      <Divider sx={{ borderColor: "darkgray" }} />
      {cart.length > 0 ? (
        <Box my={5}>
          <Container className="animate__animated animate__fadeIn">
            {cart.map((product) => (
              <React.Fragment key={product.id}>
                <CartItem
                  {...product}
                  removeItemFromCart={removeItemFromCart}
                />
                <Divider variant="middle" sx={{ my: 3 }} />
              </React.Fragment>
            ))}
          </Container>
          <Typography
            variant="h6"
            align="right"
            className="animate__animated animate__fadeInUp"
          >
            Total: {totalCartPrice().toFixed(2) + " KR"}
          </Typography>
          <Box display="flex" gap justifyContent={"center"} my="15px">
            <Button
              variant="contained"
              color="error"
              component={Link}
              to="/checkout"
              startIcon={<PointOfSaleIcon />}
            >
              Proceed to payment
            </Button>
          </Box>
          <GoBackBtn />
        </Box>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default CartPage;
