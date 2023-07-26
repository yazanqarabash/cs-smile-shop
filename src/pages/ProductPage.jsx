import * as React from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/productApi";
import ProductDetail from "../components/Product/ProductDetail";
import LoadingSpinner from "../components/UI/LoadingSpinner";

function ProductPage() {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { productId } = useParams();

  React.useEffect(() => {
    try {
      getProduct(productId).then((productData) => {
        setProduct(productData.reduce((acc, obj) => ({ ...acc, ...obj }), {}));
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [productId]);

  return loading ? (
    <LoadingSpinner text="Loading product..." />
  ) : (
    <ProductDetail {...product} />
  );
}

export default ProductPage;
