import * as React from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import Success from "./Success";
import FailedTransaction from "./FailedTransaction";
import dispatchOrder from "../../api/orderApi";

function DispatchCheckout({
  userData,
  resetUserData,
  cart,
  resetCart,
  totalCartPrice,
}) {
  const [orderId, setOrderId] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function dispatchData() {
      dispatchOrder(cart, userData, totalCartPrice, setOrderId, setError);
      resetCart();
      resetUserData();
    }
    dispatchData();
  }, []);

  return orderId ? (
    <Success orderId={orderId} />
  ) : error ? (
    <FailedTransaction error={error} />
  ) : (
    <LoadingSpinner text="Processing transaction..." />
  );
}

export default DispatchCheckout;
