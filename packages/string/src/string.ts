/**
 * converts camelCase strings to snake_case
 * @param text
 */
export const toSnakeCase = (text: string): string => text
  .split("")
  .map((c) => {
    if (c === c.toUpperCase()) {
      return `_${c.toLowerCase()}`;
    }
    return c;
  })
  .join("");

/**
 * returns the content length of a base64 string
 * @param text - base64 string
 */
export const getBase64ContentLength = (text: string): number => {
  let y = 0;
  if (text.match(new RegExp(".*==$"))) {
    y = 2;
  } else if (text.match(new RegExp(".*=$"))) {
    y = 1;
  }
  return text.length * 0.75 - y;
};
