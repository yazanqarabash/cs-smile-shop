import * as React from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { Grid, ListItemText, ListItem, List, Typography } from "@mui/material";

function Review() {
  const {
    userData: {
      cardNumber,
      cardExpDate,
      cardName,
      address,
      name,
      lastName,
      state,
      city,
    },
  } = React.useContext(UserContext);

  const { cart, totalCartPrice } = React.useContext(CartContext);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Purchase Summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.title}
              secondary={`Quantity: ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.price * product.quantity + " KR"}
            </Typography>
          </ListItem>
        ))}

        <ListItem key={1} sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {`${totalCartPrice()} KR`}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{name + " " + lastName}</Typography>
          <Typography gutterBottom>
            {[address, state, city].join(", ")}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Cardholder</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{cardName}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Card Number</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{`xxxx-xxxx-xxxx-${cardNumber?.slice(
                -4
              )}`}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Expiration</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{cardExpDate}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Review;
