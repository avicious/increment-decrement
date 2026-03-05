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
    <div className={styles.group} role="group" aria-label="Value selector">
      <button
        onClick={handleDecrementCounter}
        disabled={count <= minVal}
        aria-label="Decrease value"
      >
        <Minus />
      </button>

      <span className={styles.count} aria-live="polite">
        {count}
      </span>

      <button
        onClick={handleIncrementCounter}
        disabled={count >= maxVal}
        aria-label="Increase value"
      >
        <Plus />
      </button>
    </div>
  );
};

export default IncrementDecrement;
