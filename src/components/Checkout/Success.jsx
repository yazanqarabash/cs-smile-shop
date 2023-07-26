import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

function Success({ orderId }) {
  return (
    <>
      <Typography variant="h5" align="center" gutterBottom>
        Thank you for your purchase!
      </Typography>

      <Typography variant="subtitle1">
        Your purchase id is:{" "}
        <Typography variant="subtitle" color="primary">
          {orderId}
        </Typography>
        . We sent an email with details of your purchase and we will be in
        contact with you to follow the status of your order.
      </Typography>

      <Button
        color="primary"
        component={Link}
        to="/"
        sx={{ mt: 3, mx: "auto", display: "block", textAlign: "center" }}
      >
        Continue shopping
      </Button>
    </>
  );
}

export default Success;
