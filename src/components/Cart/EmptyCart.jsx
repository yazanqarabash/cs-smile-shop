import { Typography } from "@mui/material";
import GoBackBtn from "../UI/GoBackBtn";

function EmptyCart() {
  return (
    <>
      <Typography variant="h5" align="center" sx={{ my: 5 }}>
        There are no products in the cart
      </Typography>
      <GoBackBtn />
    </>
  );
}

export default EmptyCart;
