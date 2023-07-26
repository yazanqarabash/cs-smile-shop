import { useParams } from "react-router-dom";

function PageTitle() {
  const { category } = useParams();

  switch (category) {
    case "jewelery":
      return "Jewelery";
    case "electronics":
      return "Electronics";
    case "clothing":
      return "Clothing";
    case "men's clothing":
      return "Men's clothing";
    case "women's clothing":
      return "Women's clothing";
    default:
      return "All our products";
  }
}

export default PageTitle;
