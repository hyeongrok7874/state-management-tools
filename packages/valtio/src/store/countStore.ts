import { proxy } from "valtio";

export interface CountType {
  count: number;
}

export const countStore = proxy<CountType>({
  count: 0,
});

export function setCount(value: number) {
  countStore.count = value;
}
