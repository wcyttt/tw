export const varifyLength: (code: string) => boolean = (code: string) =>
  code.replaceAll(",", "").length === 16;
