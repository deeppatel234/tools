import { debounce } from "../utils";

export const saveLS = (id, value) => {
  localStorage.setItem(id, value);
};

export const getLS = (id, value) => {
  return localStorage.getItem(id);
};

export const saveLSAsync = debounce(saveLS, 1000);
