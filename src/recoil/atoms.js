import { atom } from "recoil";

const usersAtom = atom({
  key: "users",
  default: null,
});

const authAtom = atom({
  key: "auth",
  default: localStorage.getItem("user"),
});

const currentTabAtom = atom({
  key: "tab",
  default: "Market",
});

const currentSectionAtom = atom({
  key: "section",
  default: "Wallet",
});
const isExpandAtom = atom({
  key: "isExpand",
  default: false,
});
export {
  usersAtom,
  authAtom,
  currentTabAtom,
  currentSectionAtom,
  isExpandAtom,
};
