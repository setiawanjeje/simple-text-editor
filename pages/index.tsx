import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";
import { CustomElement, CustomText } from "../src/types";
import RichTextEditor from "../src/layout/RichTextEditor/RichTextEditor";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <title>Rich Text Editor by Slate</title>
      </Head>
      <RichTextEditor />
    </>
  );
};

export default Home;
