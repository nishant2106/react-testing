import React, { useCallback } from "react";

export function useCounter() {
  const [count, setCount] = React.useState(0);

  const increment = useCallback(() => setCount((c) => c + 1), []);

  return { count, increment };
}
