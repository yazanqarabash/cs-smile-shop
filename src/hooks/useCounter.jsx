import * as React from "react";

export const useCounter = (initialState = 0) => {
  const [counter, setCounter] = React.useState(initialState);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return {
    counter,
    increment,
    decrement,
  };
};
