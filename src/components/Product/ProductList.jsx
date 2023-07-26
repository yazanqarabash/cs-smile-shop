import ProductCard from "./ProductCard";
import PageTitle from "../PageTitle";
import { Divider, Grid, Typography } from "@mui/material";

function ProductList({ products }) {
  return (
    <>
      <Typography component={"h2"} variant="h3" sx={{ fontWeight: 800, my: 3 }}>
        <PageTitle />
      </Typography>
      <Divider sx={{ borderColor: "darkgray" }} />
      <Grid container spacing={4} py={5}>
        {products?.map((product) => (
          <Grid item xs={12} sm={6} lg={3} key={product.id}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ProductList;
