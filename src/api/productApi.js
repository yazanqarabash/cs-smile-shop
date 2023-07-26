import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.REACT_APP_API_URL;

export function getProducts() {
  return axios
    .get(`${baseUrl}/products`)
    .then(handleResponse)
    .catch(handleError);
}

export function getProductsByCategory(category) {
  return axios
    .get(`${baseUrl}/products?category=${category}`)
    .then(handleResponse)
    .catch(handleError);
}

export function getProduct(productId) {
  return axios
    .get(`${baseUrl}/products?id=${productId}`)
    .then(handleResponse)
    .catch(handleError);
}
