export const getLocalStorage = () => {
  let store = localStorage.getItem("store");
  return store === null ? null : JSON.parse(store).store;
};
