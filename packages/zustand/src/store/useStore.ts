import create from "zustand";

interface StoreType {
  count: number;
  setCount: (value: number) => void;
}

const useStore = create<StoreType>((set) => ({
  count: 0,
  setCount: (value) => set({ count: value }),
}));

export default useStore;
