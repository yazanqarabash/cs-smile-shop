import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

export default async function dispatchOrder(
  cart,
  userData,
  totalCartPrice,
  setOrderId,
  setError
) {
  const outOfStock = [];
  const checkAndUpdateStock = async (item) => {
    try {
      const response = await axios.get(`${baseUrl}/products?id=${item.id}`);
      const itemData = response.data[0];

      if (itemData.stock >= item.quantity) {
        const updatedStock = itemData.stock - item.quantity;

        // Update the product's stock
        await axios.put(`${baseUrl}/products/${item.id}`, {
          ...itemData,
          stock: updatedStock,
        });
      } else {
        setError(`${itemData.title} is out of stock`);
        outOfStock.push(itemData.title);
      }
    } catch (error) {
      setError(`${error.name}: ${error.message}`);
    }
  };

  await Promise.all(cart.map(checkAndUpdateStock));

  // Upload order to API

  if (outOfStock.length === 0) {
    const order = {
      buyer: userData,
      products: cart,
      total: totalCartPrice(),
      date: new Date().toISOString(),
    };

    try {
      const response = await axios.post(`${baseUrl}/orders`, order);
      const { id } = response.data;

      setOrderId(id);
    } catch (error) {
      setError(`${error.name}: ${error.message}`);
    }
  }
}
