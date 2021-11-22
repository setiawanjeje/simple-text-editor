import React from "react";
import { RenderLeafProps } from "slate-react";
import { MARK } from "../../constants";

const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf[MARK.BOLD]) {
    children = <strong>{children}</strong>;
  }

  if (leaf[MARK.ITALIC]) {
    children = <em>{children}</em>;
  }

  if (leaf[MARK.UNDERLINE]) {
    children = <u>{children}</u>;
  }

  if (leaf[MARK.STRIKETHROUGH]) {
    children = <s>{children}</s>;
  }
  return <span {...attributes}>{children}</span>;
};

export default Leaf;
