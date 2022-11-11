import { atom } from "recoil";

const countAtom = atom({
  key: "count",
  default: 0,
});

export default countAtom;
