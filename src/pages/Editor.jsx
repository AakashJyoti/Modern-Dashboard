import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { useStateCotext } from "../contexts/ContextProvider";

// import { EditorData } from "../data/dummy";
import { Header } from "../components";

const Editor = () => {
  const { currentMode } = useStateCotext();
  return (
    <div className="m-2 md:m-10 mt-16 p-2 md:p-10 bg-white rounded-3xl dark:bg-[#484B52] dark:text-gray-200">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        {/* <EditorData /> */}
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
