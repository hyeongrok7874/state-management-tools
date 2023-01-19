import constate from "constate";
import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState<number>(0);
  return { count, setCount };
}

export const [CounterProvider, useCounterContext] = constate(useCounter);
