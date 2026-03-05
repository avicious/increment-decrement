import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "./IncrementDecrement.module.css";

const IncrementDecrement = ({ minVal = 2, maxVal = 8 }) => {
  const [count, setCount] = useState(minVal);

  const handleIncrementCounter = () => {
    if (count < maxVal) {
      setCount((prev) => prev + 1);
    }
  };

  const handleDecrementCounter = () => {
    if (count > minVal) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.group}>
      <button className={styles.increment} onClick={handleIncrementCounter}>
        <Plus />
      </button>

      <p>{count}</p>

      <button className={styles.decrement} onClick={handleDecrementCounter}>
        <Minus />
      </button>
    </div>
  );
};

export default IncrementDecrement;
