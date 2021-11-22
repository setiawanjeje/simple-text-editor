import React from "react";
import { RenderElementProps } from "slate-react";
import styles from "./Element.module.css";
import { BLOCK } from "../../constants";

const Element = ({ attributes, children, element }: RenderElementProps) => {
  switch (element.type) {
    case BLOCK.CODE:
      return (
        <pre {...attributes} className={styles.codeBlock}>
          <code>{children}</code>
        </pre>
      );
    case BLOCK.QUOTE:
      return (
        <blockquote {...attributes} className={styles.quote}>
          {children}
        </blockquote>
      );
    case BLOCK.UNORDERED_LIST:
      return <li {...attributes}>{children}</li>;
  }
  return (
    <p {...attributes} className={styles.paragraph}>
      {children}
    </p>
  );
};

export default Element;
