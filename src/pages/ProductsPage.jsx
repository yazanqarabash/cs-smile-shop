import * as React from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../api/productApi";
import ProductList from "../components/Product/ProductList";
import LoadingSpinner from "../components/UI/LoadingSpinner";

function ProductsPage() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { category, term } = useParams();

  React.useEffect(() => {
    try {
      if (category) {
        getProductsByCategory(category).then((data) => {
          setProducts(data);
          setLoading(false);
        });
      } else {
        getProducts().then((data) => {
          if (term) {
            const filteredItems = data.filter((product) =>
              product.title.toLowerCase().includes(term.trim().toLowerCase())
            );
            setProducts(filteredItems);
          } else {
            setProducts(data);
          }
          setLoading(false);
        });
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [category, term]);
  return loading ? (
    <LoadingSpinner text="Loading products..." />
  ) : (
    <ProductList products={products} />
  );
}

export default ProductsPage;
