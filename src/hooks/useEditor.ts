import { useRef, useState } from "react";
import { applyStyle, TStyle } from "../components/email-editor/apply-style";

export default function useEditor() {
  const [text, setText] = useState("Enter email...");
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const updateSelection = () => {
    if (!textRef.current) return;
    setSelectionStart(textRef.current.selectionStart);
    setSelectionEnd(textRef.current.selectionEnd);
  };

  const applyFormat = (type: TStyle) => {
    const selectedText = text.substring(selectionStart, selectionEnd);

    if (!selectedText) return;
    const before = text.substring(0, selectionStart);
    const after = text.substring(selectionEnd);

    setText(`${before}${applyStyle(type, selectedText)}${after}`);
  };

  return { text, applyFormat, updateSelection, setText, textRef };
}
