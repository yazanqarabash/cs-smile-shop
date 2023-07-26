import * as React from "react";
import { Alert, Snackbar } from "@mui/material";

function SuccessSnackbar({ message }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {message || "Action done successfully"}
      </Alert>
    </Snackbar>
  );
}

export default SuccessSnackbar;
