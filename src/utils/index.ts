import { Transforms, Editor, Text, BaseEditor, Element } from "slate";
import { ReactEditor } from "slate-react";

export const isMarkActive = (
  editor: ReactEditor & BaseEditor,
  mark: string
) => {
  const [match] = Editor.nodes(editor, {
    // @ts-ignore
    match: (n) => n[mark],
    universal: true,
  });
  return !!match;
};

export const handleToggleMark = (
  editor: ReactEditor & BaseEditor,
  mark: string
) => {
  const isActive = isMarkActive(editor, mark);
  Transforms.setNodes(
    editor,
    { [mark]: isActive ? null : true },
    { match: (n) => Text.isText(n), split: true }
  );
};

export const isBlockActive = (
  editor: BaseEditor & ReactEditor,
  block: string
) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => Element.isElement(n) && n.type === block,
  });
  return !!match;
};

export const handleToggleBlock = (
  editor: BaseEditor & ReactEditor,
  block: string
) => {
  const isActive = isBlockActive(editor, block);
  Transforms.setNodes(
    editor,
    { type: isActive ? undefined : block },
    { match: (n) => Editor.isBlock(editor, n) }
  );
};
