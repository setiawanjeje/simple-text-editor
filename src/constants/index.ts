type KeyEvent = {
  [key: string]: string;
};

export const MARK = {
  BOLD: "bold",
  ITALIC: "italic",
  STRIKETHROUGH: "strikethrough",
  UNDERLINE: "underline",
};

export const KEY_EVENT: KeyEvent = {
  b: MARK.BOLD,
  u: MARK.UNDERLINE,
  i: MARK.ITALIC,
  s: MARK.STRIKETHROUGH,
};

export const BLOCK = {
  CODE: "code",
  QUOTE: "quote",
  ORDERED_LIST: "ordered_list",
  UNORDERED_LIST: "unordered_list",
};
