import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function GoBackBtn() {
  const navigate = useNavigate();
  const handleReturn = () => navigate(-1);

  return (
    <Button startIcon={<ArrowBackIcon />} onClick={handleReturn}>
      Go Back
    </Button>
  );
}

export default GoBackBtn;
