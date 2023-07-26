import * as React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Tooltip, Badge, IconButton } from "@mui/material";

function CartWidget() {
  const { amountOfItemsInCart } = React.useContext(CartContext);

  /* MAKE AMOUNT DYNAMIC */
  return amountOfItemsInCart() > 0 ? (
    <Tooltip title="Cart">
      <IconButton
        sx={{ mx: {xs: 0, sm: 1} }}
        aria-label="add to shopping cart"
        size="large"
        color="inherit"
        component={Link}
        to="/cart"
      >
        <Badge badgeContent={amountOfItemsInCart()} color="secondary">
          <ShoppingCartIcon sx={{ fontSize: 30 }} />
        </Badge>
      </IconButton>
    </Tooltip>
  ) : null;
}

export default CartWidget;
