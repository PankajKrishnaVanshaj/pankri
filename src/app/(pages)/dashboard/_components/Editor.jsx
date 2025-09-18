"use client";

import React, { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";

const Editor = ({ value, onChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    import("quill").then((QuillModule) => {
      const Quill = QuillModule.default;

      if (editorRef.current && !editorRef.current._quill) {
        const quill = new Quill(editorRef.current, {
          theme: "snow",
          modules: {
            toolbar: [
              // Headings, Fonts & Sizes
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ font: [] }],
              [{ size: ["small", false, "large", "huge"] }],

              // Text Formatting
              ["bold", "italic", "underline", "strike"],
              [{ color: [] }, { background: [] }],
              [{ script: "sub" }, { script: "super" }],
              ["blockquote", "code-block"],

              // Lists & Indentation
              [{ list: "ordered" }, { list: "bullet" }],
              [{ indent: "-1" }, { indent: "+1" }],
              [{ direction: "rtl" }],
              [{ align: [] }],

              // Media & Links
              ["link", "image", "video", "formula"],

              ["table"],

              // Undo / Redo (custom handlers needed)
              ["clean"], // remove formatting
            ],
          },
          placeholder: "Write something amazing...",
        });

        editorRef.current._quill = quill;

        quill.on("text-change", () => {
          onChange?.(quill.root.innerHTML);
        });

        if (value) {
          quill.root.innerHTML = value;
        }
      }
    });
  }, []);

  return (
    <div ref={editorRef} className="h-96 bg-white rounded-xl border shadow-sm" />
  );
};

export default Editor;
