import * as React from "react";
import { useCounter } from "../../hooks/useCounter";
import {
  IconButton,
  Button,
  Stack,
  FormHelperText,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// MUI System
import Box from "@mui/system/Box";

function ProductCount({ stock = 0, initial = 1, onAdd }) {
  const { counter, increment, decrement } = useCounter(initial);

  const handleAddBtnClick = () => onAdd(counter);

  return (
    <Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
      >
        <FormControl
          sx={{
            width: "11ch",
          }}
          variant="outlined"
        >
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">st</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            type="number"
            inputProps={{
              "aria-label": "weight",
              type: "number",
              value: stock > 0 && counter,
              max: 10,
              min: 1,
              disabled: true,
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">
            {stock < 1 ? "Out of stock" : `In stock: ${stock}`}
          </FormHelperText>
        </FormControl>
        <Stack direction={{ xs: "row-reverse", sm: "column" }}>
          <IconButton
            aria-label="addButton"
            disabled={stock < 1 || (counter === stock && true)}
            onClick={increment}
          >
            <AddIcon />
          </IconButton>
          <IconButton
            aria-label="removeButtom"
            disabled={counter < 1 || (stock < 1 && true)}
            onClick={decrement}
          >
            <RemoveIcon />
          </IconButton>
        </Stack>
      </Box>

      <Button
        aria-label="addToCart"
        variant="outlined"
        color="inherit"
        startIcon={<ShoppingCartIcon />}
        sx={{ mt: 1 }}
        onClick={handleAddBtnClick}
        disabled={stock < 1 || (counter < 1 && true)}
      >
        Add to cart
      </Button>
    </Box>
  );
}

export default ProductCount;
