import { CircularProgress, Typography, Box } from "@mui/material";

function LoadingSpinner({ text = "Loading..." }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
      <CircularProgress />
      <Typography variant="overline">{text}</Typography>
    </Box>
  );
}

export default LoadingSpinner;
