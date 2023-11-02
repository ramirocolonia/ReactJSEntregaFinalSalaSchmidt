import { useState } from "react";

const useCounter = (min,max) => {
  const [count, setCount] = useState(min);

  const increment = () => {
    if (max > count) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };
  
  return {
    count,
    increment,
    decrement
  }
};

export default useCounter;
