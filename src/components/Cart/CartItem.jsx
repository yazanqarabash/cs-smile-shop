import {
  Typography,
  Grid,
  FormHelperText,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function CartItem({ id, title, price, quantity, image, removeItemFromCart }) {
  const handleRemoveItem = () => removeItemFromCart(id);

  return (
    <>
      <Grid container gap>
        <Grid
          item
          xs={12}
          md={2}
          display="grid"
          textAlign="center"
          justifyContent="center"
          alignContent="center"
        >
          <img src={image} alt={id} height="150" width="150" />
        </Grid>

        <Grid
          item
          xs={12}
          md={2}
          display="grid"
          textAlign="center"
          justifyContent="center"
          alignContent="center"
        >
          <Typography variant="inherit">{title}</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          display="grid"
          textAlign="center"
          justifyContent="center"
          alignContent="center"
        >
          <Box>
            <FormHelperText>Unit price</FormHelperText>
            <Typography variant="inherit">{price + " KR"}</Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          display="grid"
          textAlign="center"
          justifyContent="center"
          alignContent="center"
        >
          <FormHelperText>Quantity</FormHelperText>
          <Typography variant="inherit">{quantity}</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          display="grid"
          textAlign="center"
          justifyContent="center"
          alignContent="center"
        >
          <FormHelperText>Subtotal</FormHelperText>
          <Typography variant="inherit">
            {(price * quantity).toFixed(2) + " KR"}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={2}
          md={1}
          display="grid"
          textAlign="center"
          justifyContent="center"
          alignContent="center"
        >
          <Tooltip title="Eliminar" placement="top">
            <IconButton onClick={handleRemoveItem}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
}

export default CartItem;
