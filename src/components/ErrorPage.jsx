import { useRouteError } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box
      id="error-page"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" fontSize="8em">
        Oops!
      </Typography>
      <Typography variant="p" fontSize="2em">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="p" fontSize="1.5em">
        <i>{error.statusText || error.message}</i>
      </Typography>
    </Box>
  );
}
