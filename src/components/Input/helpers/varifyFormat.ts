export const varifyFormat: (code: string) => boolean = (code: string) =>
  code.replaceAll(",", "").match(/^\w+$/) !== null;
