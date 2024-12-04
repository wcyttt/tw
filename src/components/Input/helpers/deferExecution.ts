export const deferExecution = (callback: Function, timeout: number = 3000) => {
  setTimeout(() => {
    callback();
  }, timeout);
};
