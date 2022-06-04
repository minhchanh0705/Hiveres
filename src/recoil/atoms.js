import { atom } from "recoil";

const usersAtom = atom({
  key: "users",
  default: null,
});

const authAtom = atom({
  key: "auth",
  default: localStorage.getItem("user"),
});

const sentEmailSignUpAtom = atom({
  key: "sentEmailSignUp",
  default: localStorage.getItem("sentEmailSignUp"),
});

const verifiedCodeSignUpAtom = atom({
  key: "verifiedCodeSignUp",
  default: localStorage.getItem("verifiedCodeSignUp"),
});

const sentEmailForgotAtom = atom({
  key: "sentEmailForgot",
  default: localStorage.getItem("sentEmailForgot"),
});

const verifiedCodeForgotAtom = atom({
  key: "verifiedCodeForgot",
  default: localStorage.getItem("verifiedCodeForgot"),
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
  sentEmailSignUpAtom,
  verifiedCodeSignUpAtom,
  sentEmailForgotAtom,
  verifiedCodeForgotAtom,
};
