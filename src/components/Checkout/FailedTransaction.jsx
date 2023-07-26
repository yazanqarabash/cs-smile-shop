import GoBackBtn from "../UI/GoBackBtn";
import { Divider, Typography } from "@mui/material";

function FailedTransaction({ error }) {
  return (
    <>
      <Typography variant="h5" align="center" gutterBottom>
        There was an error in the transaction... Contact the administrator for
        more information.
      </Typography>

      <Divider
        sx={{
          my: { xs: 3, md: 6 },
          mx: { xs: "auto", md: 0 },
        }}
        variant="middle"
      />

      <Typography variant="subtitle1" align="center" gutterBottom>
        {`Problem detail: ${error}`}
      </Typography>

      <GoBackBtn />
    </>
  );
}

export default FailedTransaction;
