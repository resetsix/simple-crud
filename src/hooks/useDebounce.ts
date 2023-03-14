import { useEffect, useState } from "react";

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const time = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(time);
    };
  }, [delay, value]);
  return debouceValue;
};
