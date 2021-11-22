type KeyEvent = {
  [key: string]: string;
};

export const KEY_EVENT: KeyEvent = {
  b: "bold",
  u: "underline",
  i: "italic",
  s: "striketrough",
  q: "quote",
};

export const MARK = {
  BOLD: "bold",
  ITALIC: "italic",
  STRIKETHROUGH: "strikethrough",
  UNDERLINE: "underline",
};

export const BLOCK = {
  CODE: "code",
  QUOTE: "quote",
  ORDERED_LIST: "ordered_list",
  UNORDERED_LIST: "unordered_list",
};
