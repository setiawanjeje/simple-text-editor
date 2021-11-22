import React, { useState, useCallback, useRef } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { Button, Element, Leaf } from "../../components";
import styles from "./RichTextEditor.module.css";
import { handleToggleMark, handleToggleBlock } from "../../utils";
import { KEY_EVENT, MARK, BLOCK } from "../../constants";

const initValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const RichTextEditor = () => {
  const editorRef = useRef();
  if (!editorRef.current) editorRef.current = withReact(createEditor());
  const editor = editorRef.current;

  const [value, setValue] = useState<Descendant[]>(initValue);
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  if (!editor) return <></>;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.heading}>Rich Text Editor</h1>
        <div className={styles.slateContainer}>
          <Slate
            editor={editor}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          >
            <div className={styles.toolbar}>
              <Button
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleToggleMark(editor, MARK.BOLD);
                }}
                icon="format_bold"
              />
              <Button
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleToggleMark(editor, MARK.ITALIC);
                }}
                icon="format_italic"
              />
              <Button
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleToggleMark(editor, MARK.UNDERLINE);
                }}
                icon="format_underlined"
              />
              <Button
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleToggleMark(editor, MARK.STRIKETHROUGH);
                }}
                icon="format_strikethrough"
              />
              <Button
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleToggleBlock(editor, BLOCK.CODE);
                }}
                icon="code"
              />
              <Button
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleToggleBlock(editor, BLOCK.QUOTE);
                }}
                icon="format_quote"
              />
              <Button
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleToggleBlock(editor, BLOCK.UNORDERED_LIST);
                }}
                icon="format_list_bulleted"
              />
            </div>
            <div className={styles.editor}>
              <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onKeyDown={(event) => {
                  if (!event.ctrlKey) {
                    return;
                  }

                  Object.keys(KEY_EVENT).forEach((eachKey) => {
                    if (event.key === eachKey) {
                      event.preventDefault();
                      handleToggleMark(editor, KEY_EVENT[eachKey]);
                    }
                  });
                }}
              />
            </div>
          </Slate>
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
