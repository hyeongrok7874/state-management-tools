import React, { SetStateAction, Dispatch } from "react";

interface ContextType {
  count: number;
  setCount?: Dispatch<SetStateAction<number>>;
}

const defaultValue: ContextType = {
  count: 0,
};

const Context = React.createContext<ContextType>(defaultValue);

export default Context;
