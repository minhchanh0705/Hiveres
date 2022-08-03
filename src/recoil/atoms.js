import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

const usersAtom = atom({
  key: "users",
  default: null,
  effects_UNSTABLE: [persistAtom],
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
  currentSectionAtom,
  isExpandAtom,
  sentEmailSignUpAtom,
  verifiedCodeSignUpAtom,
  sentEmailForgotAtom,
  verifiedCodeForgotAtom,
};
