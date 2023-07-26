import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function ProductCard({ id, title, price, image }) {
  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/products/${id}`);

  return (
    <Card className="animate__animated animate__fadeIn" raised>
      <CardActionArea onClick={handleNavigation}>
        <CardMedia component="img" image={image} height="260" alt={id} />
        <CardContent>
          <Typography variant="body2" color="text.secondary" noWrap>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="subtitle2" color="text.secondary" align="right">
          {`${price} KR`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
